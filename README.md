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

## Nawigacja (zakładki i podzakładki)

Menu odwzorowuje strukturę z referencyjnego pliku `Polski PCS - standalone`:

| Zakładka | Podzakładki |
| --- | --- |
| **O systemie** ▾ | Czym jest PCS · Jak to działa · Ekosystem i integracje · Bezpieczeństwo i zgodność · Partnerzy i instytucje |
| **Moduły** ▾ | **A · Obrót towarowy:** Moduł Towarowy, Portowa Ewidencja Towarowa, Wolny Obszar Celny<br>**B · Statki i zawinięcia:** Dyspozytor portowy, Ewidencja Zawinięć, Moduł Maklerski<br>**C · Operacje i służby:** Moduł Odpadów, Portowa Straż Pożarna<br>**D · Zarządzanie:** Moduł Administracji, Moduł Raportowy |
| **Dla kogo** | — |
| **Wiedza** ▾ | Dokumentacja · API · Szkolenia · FAQ · Słownik pojęć · Status systemu |
| **Aktualności** | — |
| **Kontakt** | — |

Routing działa po hashu (np. `#modul-towarowy`), logo wraca na stronę główną.

### Treść podstron

- **Strona główna, O systemie, Moduły, Dla kogo** — treść oryginalna, bez zmian.
- **Podzakładki** — mają poprawne tytuły i (tam, gdzie było to znane z projektu)
  prawdziwe zdania wprowadzające; pozostała treść to układ poglądowy z tekstem
  *lorem ipsum* i zaślepkami graficznymi (gradient + rozmycie, oznaczone
  „Grafika poglądowa"). Do podmiany po dostarczeniu treści.
- Breadcrumbs na podstronach zostały usunięte.

## Hosting (GitHub Pages)

Publikacja z brancha `claude/polski-pcs-design-import-8l0q2c`, folder `/ (root)`
(Settings → Pages → Deploy from a branch).
