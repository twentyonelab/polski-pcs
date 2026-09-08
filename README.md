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

- **Strona główna, O systemie, Moduły, Dla kogo** — treść oryginalna z projektu, bez zmian.
- **24 podzakładki** mają treść merytoryczną opartą na oficjalnym serwisie
  **polskipcs.pl** (moduły systemu, obsługiwane komunikaty i kody w zgłoszeniach
  celnych, integracje, dane spółki, historia wdrożeń, kanały wsparcia).
  Bez tekstu *lorem ipsum*.
- Breadcrumbs na podstronach zostały usunięte.

### Układy (różne konwencje)

Szablon podstrony renderuje bloki tylko wtedy, gdy strona dostarcza dane —
dzięki temu każda podstrona ma układ dopasowany do treści:

| Blok | Używany na |
| --- | --- |
| Kafle statystyk | Czym jest PCS |
| Kroki procesu | Jak działa System PCS, Zgłoszenie do dyspozytora, Wdrożenie |
| Tabela | Ewidencja towarowa i zawinięć, Integracja i komunikaty |
| Słownik (2 kolumny) | Słownik pojęć |
| Lista status + kanały | Status systemu |
| Dane kontaktowe | Kontakt |
| Lista pytań i odpowiedzi | FAQ |
| Kafle z datami | Aktualności |
| Siatka kafli | Wiedza, Partnerzy, Moduł Raportowy |

### Grafiki

W katalogu `img/` znajduje się 17 autorskich ilustracji SVG w palecie marki
(schemat wymiany danych, statek, kontenery, suwnice, dokumenty, integracje,
bezpieczeństwo, wykresy, mapa portów, odpady, ładunki niebezpieczne,
administracja, słownik, status, aktualności, kontakt, kroki procesu).
Każda podstrona wskazuje ilustrację adekwatną do tematu. To grafiki wektorowe —
lekkie i ostre w każdej skali; można je zastąpić zdjęciami, podmieniając plik.

## Hosting (GitHub Pages)

Publikacja z brancha `claude/polski-pcs-design-import-8l0q2c`, folder `/ (root)`
(Settings → Pages → Deploy from a branch).

## Wersja standalone (jeden plik)

`tools/build-standalone.py` buduje **jednoplikową** wersję strony — wszystkie
zasoby (React, runtime Claude Design, design system, 24 obrazy, 15 fontów
woff2, 17 ilustracji SVG oraz wideo hero) osadzone jako `data:` URI:

```bash
python3 tools/build-standalone.py ~/polski-pcs-standalone.html
```

Wynik to ~15 MB HTML, który działa z `file://`, z pendrive'a albo z dowolnego
hostingu — bez katalogów `res/` i `img/`, bez żadnego zapytania sieciowego.
Plik nie jest trzymany w repozytorium (rozmiar); generuje się go na żądanie.

Nieprzezroczyste zdjęcia PNG (~16 MB) są w tym pliku przepakowywane do
progresywnego JPEG-a (q86) — base64 powiększa każdy bajt o 1/3, a różnica na
ekranie jest niewidoczna. Logo i ikony z kanałem alfa zostają PNG-ami.
Wymaga `pillow`; bez niego skrypt zostawia oryginalne PNG-i (plik ~33 MB).

Uwaga: skrypty JS są wstawiane jako `src="data:text/javascript;base64,…"`,
a nie jako treść `<script>`. Runtime dc przepisuje atrybuty camelCase na
`sc-camel-*` w całym poddrzewie `<x-dc>`, co zmieniałoby również tekst
skryptu w `<helmet>` (`imageAlt` → `sc-camel-image-alt`) i psuło jego parsowanie.
