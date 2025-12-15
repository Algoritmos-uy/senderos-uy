# Senderos Uruguayos

Aplicación web estática para promocionar rutas de senderismo y eventos

Contenido mínimo y cómo probar

- Archivos principales:

  - `index.html` — página principal.
  - `src/css/` — estilos divididos en `reset.css`, `theme.css`, `global.css`, `components.css`, `sections.css`, `responsive.css`.
  - `src/js/` — scripts (`main.js`, `theme.js`).
  - `assets/` — imágenes y recursos.

- Ejecutar localmente (desde la raíz del proyecto):

```powershell
# con Python 3
python -m http.server 8000
# abrir http://localhost:8000
```

- Formulario de contacto: el formulario envía a `/api/contact`. En ausencia de API, el cliente abre `mailto:` como fallback.

Licencia y contacto

- Proveedor/Desarrollador: Willans Junes
