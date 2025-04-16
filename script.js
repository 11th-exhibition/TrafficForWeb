
function setLanguage(lang) {
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerHTML = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
}
window.onload = () => setLanguage('zh');
