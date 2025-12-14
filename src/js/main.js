/*
Funciones expuestas en `main`:
- initNav: maneja hamburguesa y cierre de menú al clicar un enlace
- initContactForm: captura submit y hace POST a /api/contact con fallback a mailto
- initThemeToggle: conecta botón con theme.toggleTheme
*/
const main = (function(){
  function initNav(){
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    if(!navToggle || !nav) return;
    navToggle.addEventListener('click', ()=> {
      const shown = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!shown));
      nav.style.display = shown ? '' : 'block';
    });
    // cerrar al click en enlaces (útil para móviles)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      nav.setAttribute('data-open','false');
      nav.style.display = '';
    }));
  }

  function initThemeToggle(){
    const btn = document.getElementById('themeToggle');
    if(!btn || !window.theme) return;
    btn.addEventListener('click', ()=>{
      window.theme.toggleTheme();
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById('contactStatus');
    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = 'Enviando...';
    try{
      const res = await fetch(form.action, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      if(res.ok){
        status.textContent = 'Gracias. Su consulta fue enviada.';
        form.reset();
      } else {
        throw new Error('error servidor');
      }
    }catch(err){
      // fallback: abrir mailto con los datos
      const subject = encodeURIComponent(data.asunto || 'Consulta desde web');
      const body = encodeURIComponent(`${data.nombre || ''}\n\n${data.mensaje || ''}\n\nTel: ${data.telefono || ''}\nEmail: ${data.email || ''}\nCiudad: ${data.ciudad || ''}`);
      window.location.href = `mailto:info@senderos.uy?subject=${subject}&body=${body}`;
      status.textContent = 'No se pudo enviar por la API. Se abrió su cliente de correo.';
    }
  }

  function initContactForm(){
    const form = document.getElementById('contactForm');
    if(!form) return;
    form.addEventListener('submit', handleSubmit);
  }

  return { initNav, initThemeToggle, initContactForm };
})();

document.addEventListener('DOMContentLoaded', ()=>{
  main.initNav();
  main.initThemeToggle();
  main.initContactForm();
});