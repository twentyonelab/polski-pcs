# Polski PCS — strona (v3)

Statyczna wersja strony **Polski PCS** zaimportowana z projektu Claude Design
(`Polski PCS - strona v3.dc.html`) i przygotowana do hostowania na GitHub Pages.

Strona to jednostronicowa aplikacja renderowana po stronie przeglądarki przez
runtime Claude Design (`support.js` + biblioteka komponentów w `_ds/`). Została
uczyniona **w pełni samowystarczalną** — nie pobiera niczego z zewnętrznych CDN.

## Uruchomienie lokalnie

```bash
python3 -m http.server 8080
# otwórz http://localhost:8080/index.html
```

Wymagany jest serwer HTTP (otwarcie pliku przez `file://` nie zadziała, bo
runtime pobiera zasoby względnymi ścieżkami).

## Struktura

| Ścieżka | Opis |
| --- | --- |
| `index.html` | Punkt wejścia (kopia źródłowego `*.dc.html` z lokalnym Reactem). |
| `support.js` | Runtime Claude Design (parsuje `<x-dc>`, `<sc-if>`, `<x-import>` …). |
| `_ds/…/` | Design system: komponenty (`_ds_bundle.js`), tokeny CSS, font Poppins. |
| `assets/` | Grafiki (logo, rendery modułów, tła, karty portów). |
| `vendor/` | React 18.3.1 + ReactDOM (UMD) hostowane lokalnie. |
| `.nojekyll` | Wyłącza Jekyll, aby GitHub Pages serwował katalog `_ds/`. |

## Zmiany względem projektu Claude Design

Aby strona działała offline / na GitHub Pages bez zależności od zewnętrznych
usług:

- **React i ReactDOM** — pobrane z npm i hostowane w `vendor/` zamiast z unpkg.
  React jest ładowany w `<head>`, zanim wykona się `_ds_bundle.js`.
- **Font Poppins** — pobrany z `@fontsource/poppins` do `_ds/…/tokens/fonts/`
  (warianty `latin` i `latin-ext` dla polskich znaków); `@import` z Google Fonts
  zastąpiono lokalnymi regułami `@font-face`.

## Grafiki zastępcze (placeholdery)

API projektu Claude Design ma limit 256 KB na pobranie pojedynczego pliku.
Poniższe zdjęcia/rendery przekraczały ten limit i **nie dało się ich pobrać**,
więc zostały zastąpione dopasowanymi kolorystycznie placeholderami
(paleta granat/turkus). Aby użyć oryginałów, wystarczy podmienić pliki o tych
samych nazwach w `assets/`:

- `hero-bg.png` — tło sekcji hero
- `ekosystem-bg.png` — tło sekcji „Dla kogo”
- `footer-ship.jpg` — statek w stopce
- `thumb-control-tower.png`, `thumb-container-crane.png`,
  `thumb-container-stack.png`, `thumb-analytics-laptop.png` — miniatury modułów
- `port-{gdansk,gdynia,szczecin}-{gray,color}.png` — karty portów

Pozostałe grafiki (logo, `mod-*.png`, loga instytucji) to oryginały z projektu.
