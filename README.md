# Cozy Sport — v2 Pro

Sitio de marca para **Cozy Sport**, indumentaria de ciclismo hecha en Beccar. Estático, en GitHub Pages; la compra sigue en la tienda https://cozy-sport.vercel.app/.

**En vivo:** https://juancjose.github.io/cozy-sport-v2-pro/

## Dirección de diseño
*Afiche de carrera suizo*: fondo hueso, negro y naranja señal; Big Shoulders Display condensada a gran escala con Inter Tight; capítulos numerados, botones con barrido, acordeón de disciplinas, contador "km 100".

## Destacado
- Acordeón de disciplinas accesible (`aria-expanded`, `grid-template-rows`) con hover en desktop y tap en mobile, cada una enlazada a su categoría en la tienda.
- Kits para equipos con cotización por WhatsApp prellenada y logos reales de equipos.
- Datos comerciales reales (envío gratis desde $100.000, 3 cuotas, 10% OFF transferencia) y contacto completo.
- JSON-LD `SportingGoodsStore`, OG, sitemap, imágenes WebP responsivas, `prefers-reduced-motion`.

## Placeholders
Ninguno: todos los datos vienen de `config/store.ts` del sitio actual.

## Performance
- Fuentes self-hosted (woff2, subset latin) con `preload`: sin dependencias de terceros en el render.
- Imágenes WebP con `srcset`/`sizes`, `width`/`height` explícitos (CLS ≈ 0) y `fetchpriority` en la imagen principal.
