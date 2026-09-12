# Web del CEIP Genil (Granada)

Sitio web público del colegio. Es HTML/CSS/JS sencillo, **sin build ni dependencias**, para que cualquiera en el cole pueda editar el texto directamente en los archivos `.html` sin instalar nada.

## Estructura

```
index.html        Inicio
el-centro.html     Quiénes somos, instalaciones, proyecto educativo
etapas.html        Infantil y Primaria
admision.html      Proceso de escolarización
familias.html      Comedor, aula matinal, extraescolares, AMPA
noticias.html      Noticias del colegio
contacto.html      Dirección, teléfono, email, mapa
css/style.css       Todos los estilos (colores, tipografía, layout)
js/main.js          Menú móvil (hamburguesa)
images/favicon.svg  Icono "Cauce" (sierra + río) usado como marca
```

Cada página repite la misma cabecera y pie: para cambiar un enlace del menú o del pie hay que editarlo en las 7 páginas (no hay plantillas ni servidor).

## Editar contenido

Abre el `.html` de la página que quieras cambiar con cualquier editor de texto y modifica el texto entre etiquetas (por ejemplo `<h1>...</h1>` o `<p>...</p>`). No hace falta tocar el CSS ni el JS para cambiar textos.

Antes de publicar, revisa **CONTENIDO-PENDIENTE.md**: ahí está la lista de todo lo que hoy es un texto de ejemplo (dirección, teléfono, noticias, nombres del equipo directivo...) y que hay que sustituir por los datos reales del centro.

## Ver la web en tu ordenador

No hace falta instalar nada especial. Con Python instalado:

```bash
python3 -m http.server 8000
```

y abre `http://localhost:8000` en el navegador.

## Publicar la web (GitHub Pages, gratis)

1. En GitHub, entra en **Settings → Pages** de este repositorio.
2. En "Build and deployment" elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En un par de minutos la web estará en `https://ceciliacole.github.io/web-ceipgenil/`.
4. Si el cole tiene un dominio propio (por ejemplo `ceipgenil.es`), se puede configurar como dominio personalizado en esa misma pantalla de Settings → Pages.

## Logo

El icono actual ("Cauce") es una propuesta de logo simplificado: una sierra que se convierte en río. Vive en `images/favicon.svg` y también está repetido como SVG dentro de cada página (cabecera y pie). Cuando el cole tenga el logo definitivo, lo más sencillo es sustituir ese SVG por el archivo final (o por una imagen `<img>` si el logo final es un PNG/JPG).
