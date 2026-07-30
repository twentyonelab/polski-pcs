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
