#!/usr/bin/env python3
"""Zbuduj jednoplikowa wersje strony: wszystkie zasoby jako data URI."""
import base64, hashlib, mimetypes, os, re, subprocess, sys, tempfile, json

ROOT = "/home/user/polski-pcs"
OUT  = sys.argv[1] if len(sys.argv) > 1 else "/home/user/polski-pcs/polski-pcs-standalone.html"
s = open(f"{ROOT}/index.html", encoding="utf-8").read()

MIME = {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",
        ".woff2":"font/woff2",".js":"text/javascript",".mp4":"video/mp4"}

# Zdjecia w projekcie sa w PNG (bezstratnie, ~16 MB). W jednym pliku kazdy bajt
# rosnie o 1/3 (base64), wiec nieprzezroczyste PNG-i przepakowujemy do JPEG-a.
# Logo i ikony z kanalem alfa zostaja PNG-ami.
JPEG_QUALITY = 86

def _repack_png(path):
    """PNG bez przezroczystosci -> JPEG. Zwraca (bajty, mime) albo None."""
    try:
        from PIL import Image
    except ImportError:
        return None
    import io
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        if im.convert("RGBA").getchannel("A").getextrema()[0] < 255:
            return None                      # prawdziwa przezroczystosc
    buf = io.BytesIO()
    im.convert("RGB").save(buf, "JPEG", quality=JPEG_QUALITY,
                           optimize=True, progressive=True)
    out = buf.getvalue()
    return (out, "image/jpeg") if len(out) < os.path.getsize(path) else None

# Wideo hero w pelnej jakosci to ~21 MB (a po base64 ~29 MB) — za duzo jak na
# jeden plik. Do osadzenia przekodowujemy je lzej; strona na serwerze dostaje
# oryginaly. Bez ffmpeg (imageio-ffmpeg) krok sie pomija i pliki ida w calosci.
VIDEO_CRF = 27
VIDEO_MAX_W = 1280
_VID_CACHE = os.path.join(tempfile.gettempdir(), "polski-pcs-standalone-wideo")

def _shrink_video(path):
    """Lzejszy wariant wideo do osadzenia. Zwraca sciezke albo None."""
    try:
        import imageio_ffmpeg
        ff = imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return None
    st = os.stat(path)
    key = hashlib.sha1(
        f"{os.path.abspath(path)}|{st.st_size}|{int(st.st_mtime)}|{VIDEO_CRF}|{VIDEO_MAX_W}"
        .encode()).hexdigest()[:16]
    os.makedirs(_VID_CACHE, exist_ok=True)
    out = os.path.join(_VID_CACHE, key + ".mp4")
    if not os.path.exists(out):
        cmd = [ff, "-y", "-hide_banner", "-loglevel", "error", "-i", path, "-an",
               "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p",
               "-crf", str(VIDEO_CRF), "-preset", "slow", "-g", "48",
               "-vf", f"scale='min({VIDEO_MAX_W},iw)':-2",
               "-movflags", "+faststart", out]
        if subprocess.call(cmd) != 0 or not os.path.exists(out):
            return None
    return out if os.path.getsize(out) < os.path.getsize(path) else None

def datauri(rel):
    p = os.path.join(ROOT, rel)
    ext = os.path.splitext(rel)[1].lower()
    mime = MIME[ext]
    if ext == ".png":
        packed = _repack_png(p)
        if packed:
            b, mime = packed
            return f"data:{mime};base64," + base64.b64encode(b).decode("ascii"), len(b)
    if ext == ".mp4":
        lite = _shrink_video(p)
        if lite:
            p = lite
    b = open(p, "rb").read()
    return f"data:{mime};base64," + base64.b64encode(b).decode("ascii"), len(b)

stats = {"scripts":0,"images":0,"fonts":0,"svg":0,"video":0}
raw_total = 0

# ---- 1. scripts stay EXTERNAL, as data: URIs.
# Wklejenie kodu wprost do <script> psuje go: runtime dc przepisuje atrybuty
# camelCase na sc-camel-* w calym poddrzewie <x-dc>, co mangluje tez tekst
# skryptu w <helmet> (imageAlt -> sc-camel-image-alt). data: URI jest odporne.

# ---- 2. react/react-dom for the runtime's own loader (window.__resources)
for rel in sorted(set(re.findall(r'"(res/[^"]+\.js)"', s))):
    uri, n = datauri(rel)
    s = s.replace(f'"{rel}"', f'"{uri}"')
    stats["scripts"] += 1
    raw_total += n

# ---- 3. images referenced directly in the markup
for attr, rel in sorted(set(re.findall(r'(src|poster)="((?:res|img)/[^"]+\.(?:png|jpg|jpeg))"', s))):
    uri, n = datauri(rel)
    s = s.replace(f'{attr}="{rel}"', f'{attr}="{uri}"')
    stats["images"] += 1
    raw_total += n

# ---- 4. fonts inside the inline @font-face rules
for rel in sorted(set(re.findall(r'url\("(res/[^"]+\.woff2)"\)', s))):
    uri, n = datauri(rel)
    s = s.replace(f'url("{rel}")', f'url("{uri}")')
    stats["fonts"] += 1
    raw_total += n

# ---- 5. subpage illustrations: paths are built in JS -> inject a lookup map
svgs = {}
for f in sorted(os.listdir(f"{ROOT}/img")):
    if f.endswith(".svg"):
        uri, n = datauri(f"img/{f}")
        svgs[f[:-4]] = uri
        stats["svg"] += 1
        raw_total += n
old_g = "graphic: 'img/' + (d.graphic || 'flow') + '.svg'"
assert old_g in s, "brak linii z graphic:"
s = s.replace(old_g,
    "graphic: (window.__IMG || {})[d.graphic || 'flow'] || ('img/' + (d.graphic || 'flow') + '.svg')", 1)

# ---- 6. media wskazywane ze skryptu (wideo hero + ich plakaty).
# Strona rozwiazuje je przez this.media(path) -> window.__MEDIA[path], wiec
# kazdy plik siedzi w pliku dokladnie raz, nawet gdy odwolan jest kilka.
media = {}
for rel in sorted(set(re.findall(r"'(img/[^']+\.(?:mp4|jpg|jpeg|png))'", s))):
    uri, n = datauri(rel)
    media[rel] = uri
    stats["video" if rel.endswith(".mp4") else "images"] += 1
    raw_total += n
assert media, "brak mediow wskazywanych ze skryptu"

# ---- 7. inject the two globals right after <head>
inject = ("<script>\n"
          "window.__IMG=" + json.dumps(svgs) + ";\n"
          "window.__MEDIA=" + json.dumps(media) + ";\n"
          "</script>\n")
i = s.index("<head>") + len("<head>")
s = s[:i] + "\n" + inject + s[i:]

# ---- sanity: nothing local left to fetch
leftover = sorted(set(re.findall(r'(?:src|href)="((?:res|img)/[^"]+)"', s))
                  | set(re.findall(r'url\("((?:res|img)/[^"]+)"\)', s)))
open(OUT, "w", encoding="utf-8").write(s)
print("wklejone:", stats)
print(f"zasoby surowo: {raw_total/1048576:.1f} MB")
print(f"plik wynikowy: {os.path.getsize(OUT)/1048576:.1f} MB -> {OUT}")
print("pozostale odwolania lokalne:", leftover or "brak")
