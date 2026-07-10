# Polski PCS — strona (v3)

Statyczna wersja strony **Polski PCS** wyeksportowana z projektu Claude Design
(`Polski PCS - strona v3`) i hostowana na GitHub Pages.

Strona to **samodzielny, samowystarczalny plik** `index.html` (bundled export):
runtime Claude Design, komponenty design systemu, React oraz wszystkie grafiki i
fonty są osadzone w jednym pliku (`window.__resources`). Nie pobiera niczego z
zewnętrznych CDN — wystarczy otworzyć stronę.

## Podgląd na żywo

**https://twentyonelab.github.io/polski-pcs/**

## Uruchomienie lokalnie

```bash
python3 -m http.server 8080
# otwórz http://localhost:8080/index.html
```

## Struktura

| Ścieżka | Opis |
| --- | --- |
| `index.html` | Kompletna, samowystarczalna strona (wszystko osadzone w środku). |
| `.nojekyll` | Wyłącza przetwarzanie Jekyll na GitHub Pages. |
| `.github/workflows/deploy-pages.yml` | Opcjonalny workflow deployu Pages. |

## Hosting (GitHub Pages)

Publikacja z brancha `claude/polski-pcs-design-import-8l0q2c`, folder `/ (root)`
(Settings → Pages → Deploy from a branch).
