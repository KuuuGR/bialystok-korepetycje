# bialystok-korepetycje

Strona korepetycji z fizyki i matematyki w Białymstoku. Nauka oparta na zrozumieniu i praktyce.

## Stack

- [Astro](https://astro.build) — statyczna strona z minimalnym JavaScriptem
- [Tailwind CSS](https://tailwindcss.com) — stylowanie

## Uruchomienie

```bash
npm install
npm run dev
```

Strona dostępna pod adresem [http://localhost:4321](http://localhost:4321).

## Budowanie

```bash
npm run build
npm run preview
```

Wynik buildu trafia do katalogu `dist/`.

## Struktura

```
src/
  layouts/   # Wspólny szablon HTML (meta tagi, SEO)
  pages/     # Trasy strony (file-based routing)
  styles/    # Globalne style Tailwind
public/      # Statyczne assety (favicon, robots.txt)
```
