# Osobná stránka — statická verzia

Čisté HTML + CSS. Žiadny build, žiadne závislosti.

```
index.html      ← SK
en/index.html   ← EN
styles.css      ← všetky štýly a tokeny (spoločné pre obe verzie)
script.js       ← odhalenie pri scrolle
daniel.jpg      ← ⚠️ doplň portrét, pomer 4:5
```

## Lokálne

Otvor `index.html` v prehliadači. Alebo `npx serve .` ak chceš, aby fungovali
odkazy `/` a `/en/`.

## Deploy

Netlify / Cloudflare Pages / Vercel: pretiahni priečinok, hotovo.
Žiadny build command, žiadny output directory.

## ⚠️ Pred nasadením doplň

| Kde | Čo |
|---|---|
| oba `index.html`, `<head>` | `canonical` a `hreflang` — reálna doména |
| oba `index.html`, sekcia kontakt | e-mail na dvoch miestach (tlačidlo + text) |
| oba `index.html`, footer | GitHub, LinkedIn |
| `daniel.jpg` | portrét 4:5 (renderuje sa čiernobielo) |
| hero `.status__text` | dostupnosť podľa reality |

## Známy kompromis

Texty existujú dvakrát — v `index.html` aj `en/index.html`. Pri každej
zmene copy musíš siahnuť do oboch. To je cena za nulový build step.
Ak ťa to začne štvať, prejdi na Next.js verziu, kde je obsah na jednom mieste
a build spadne, keď preklad chýba.

## Fonty

Teraz sa ťahajú z Google Fonts cez `<link>`. Funguje to okamžite, ale znamená
to externý request. Ak chceš mať čisté GDPR a rýchlejší first paint, stiahni
si `.woff2` a nahraď `<link>` za `@font-face` v `styles.css`.
