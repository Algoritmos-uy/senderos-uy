/*
 Exponemos un objeto `theme` con init() y toggleTheme()
*/
const theme = (function(){
  const storageKey = 'site-theme';
  function getStored(){
    return localStorage.getItem(storageKey) || 'light';
  }
  function apply(t){
    document.documentElement.setAttribute('data-theme', t);
  }
  function toggleTheme(){
    const current = getStored();
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, next);
    apply(next);
  }
  function init(){
    apply(getStored());
  }
  return { init, toggleTheme };
})();

window.theme = theme;
theme.init();