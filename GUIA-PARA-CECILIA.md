# Guía para actualizar la web tú sola

Esta guía es para cuando quieras cambiar algo sin depender de Claude. Todo se hace desde el navegador, en github.com, sin instalar nada.

## Lo básico: cómo se edita cualquier archivo

1. Ve a **github.com/ceciliacole/web-ceipgenil**
2. Haz clic en el archivo que quieres cambiar (por ejemplo `contacto.html`)
3. Arriba a la derecha, pulsa el icono del **lápiz** ("Edit this file")
4. Busca el texto que quieres cambiar con **Ctrl+F** (Windows) o **Cmd+F** (Mac)
5. Cambia solo el texto que está **entre** las etiquetas `<...>`, nunca las etiquetas en sí
6. Baja al final de la página, escribe una frase corta de qué cambiaste, y pulsa **"Commit changes"**
7. Espera 1-2 minutos y recarga la web (con Cmd+Shift+R si no ves el cambio)

**Regla de oro:** si algo tiene muchos símbolos raros (`{ }`, `class=`, `style=`) y no sabes qué es, no lo toques. Cambia solo las palabras que reconozcas como texto normal.

## Ejemplos con esta web

### Cambiar el teléfono o la dirección
Están en `contacto.html` **y** dentro de cada página en el pie (footer) — búscalos con Ctrl+F por "958 89 36 07" o "Plaza General".

### Cambiar una fecha o un texto de una noticia
Abre `noticias.html`, busca la noticia por su título, y cambia el texto entre `<h3>...</h3>` (el título) o `<p>...</p>` (el texto).

### Añadir una noticia nueva
En `noticias.html`, copia un bloque completo como este (desde `<div class="news-item">` hasta su `</div>` de cierre) y pégalo encima o debajo, cambiando fecha, título y texto:
```html
<div class="news-item">
  <div><span class="date">1 de enero de 2027</span><h3>Título de la noticia</h3><p>Texto de la noticia.</p></div>
</div>
```

### Añadir una foto
1. Sube el archivo a la carpeta `images/` (botón **Add file → Upload files**)
2. En la página donde quieras que aparezca, añade esta línea donde quieras que salga la foto:
```html
<img src="images/nombre-del-archivo.jpg" alt="descripción de la foto">
```
(cambia `nombre-del-archivo.jpg` por el nombre real que subiste)

### Cambiar un enlace
Busca `href="..."` — lo que hay entre comillas es la dirección a la que lleva. Cámbiala por la nueva.

## Si necesitas algo más complicado (sin Claude de pago)

Puedes usar **ChatGPT o Claude.ai gratis** (el chat normal, sin necesidad de programar):
1. Copia el trozo de código de la página donde quieres el cambio
2. Pégaselo al chat y explica qué quieres (p. ej. "quiero añadir una tarjeta nueva como esta pero para tal cosa")
3. Te devolverá el código ya escrito
4. Lo pegas en GitHub siguiendo los pasos de "Lo básico" de arriba

## Cosas que NO deberías tocar sola (pide ayuda si hace falta)
- `css/style.css` — controla los colores y el diseño de toda la web
- `js/main.js` — controla el menú móvil y el carrusel de fotos
- La estructura de `<header>` y `<footer>` que se repite en todas las páginas (mejor cambiarla en las 9-10 páginas a la vez, o pedir ayuda)

## Publicar los cambios
No hace falta hacer nada especial: en cuanto pulsas "Commit changes" en GitHub, la web se actualiza sola gracias a **GitHub Pages** (ya está configurado). Solo espera 1-2 minutos.
