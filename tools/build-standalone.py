#!/usr/bin/env python3
"""Zbuduj jednoplikowa wersje strony: wszystkie zasoby jako data URI."""
import base64, mimetypes, os, re, sys, json

ROOT = "/home/user/polski-pcs"
OUT  = sys.argv[1] if len(sys.argv) > 1 else "/home/user/polski-pcs/polski-pcs-standalone.html"
s = open(f"{ROOT}/index.html", encoding="utf-8").read()

MIME = {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",
        ".woff2":"font/woff2",".js":"text/javascript",".mp4":"video/mp4"}

def datauri(rel):
    p = os.path.join(ROOT, rel)
    ext = os.path.splitext(rel)[1].lower()
    b = open(p, "rb").read()
    return f"data:{MIME[ext]};base64," + base64.b64encode(b).decode("ascii"), len(b)

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

# ---- 6. hero video: once, via a global (three references would triple ~10 MB)
vid_uri, vn = datauri("img/hero-port.mp4")
stats["video"] = 1
raw_total += vn
n_url = s.count("const url = (this.props.heroVideoUrl ?? 'img/hero-port.mp4').trim();")
assert n_url == 2, n_url
s = s.replace("const url = (this.props.heroVideoUrl ?? 'img/hero-port.mp4').trim();",
              "const url = (window.__VID || this.props.heroVideoUrl || '').trim();")

# ---- 7. inject the two globals right after <head>
inject = ("<script>\n"
          "window.__IMG=" + json.dumps(svgs) + ";\n"
          "window.__VID=" + json.dumps(vid_uri) + ";\n"
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
