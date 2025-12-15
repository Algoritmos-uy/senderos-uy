# Estructura de estilos CSS

Este directorio contiene los archivos CSS modularizados del proyecto.

Arquitectura actual:

- `reset.css` — Reset ligero y normalización (box-sizing, imágenes, listas, accesibilidad de foco).
- `theme.css` — Variables y tokens de diseño (colores, radios, sizes) y reglas para modo oscuro (`[data-theme="dark"]`).
- `global.css` — Estilos base y layout (tipografías, contenedores, navegación, grid genérico).
- `components.css` — Componentes reutilizables: botones, cards, formularios y helpers.
- `sections.css` — Estilos específicos de secciones (hero, eventos, galería, contacto, footer).
- `responsive.css` — Media queries y ajustes para dispositivos pequeños.

Buenas prácticas:

- Cargar `theme.css` antes que `global.css` para que las variables estén disponibles.
- Mantener componentes puros y reutilizables en `components.css`.
- Para nuevos componentes, añadir primero variables en `theme.css` si necesitas tokens reutilizables.
- Evitar reglas globales en `sections.css`; preferir selectores específicos de sección.

Si deseas proponer más módulos (por ejemplo `components/forms.css` o `components/buttons.css`), podemos subdividir `components.css`.

Autor: infraestructura del repositorio — cambios automáticos realizados por el workflow.
