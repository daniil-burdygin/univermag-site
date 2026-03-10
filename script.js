/* Univermag Site — Theme & Language */

function toggleTheme() {
  var root = document.documentElement;
  var isDark = root.getAttribute('data-theme') === 'dark';
  var next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('uvm-theme', next);
  updateThemeBtn();
}

function toggleLang() {
  var root = document.documentElement;
  var isRu = root.getAttribute('data-lang') === 'ru';
  var next = isRu ? 'en' : 'ru';
  root.setAttribute('data-lang', next);
  root.lang = next;
  localStorage.setItem('uvm-lang', next);
  updateLangBtn();
}

function updateThemeBtn() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var el = document.getElementById('themeIcon');
  if (el) el.textContent = isDark ? '\u2600' : '\u263E';
}

function updateLangBtn() {
  var isRu = document.documentElement.getAttribute('data-lang') === 'ru';
  var el = document.getElementById('langToggle');
  if (el) el.textContent = isRu ? 'EN' : 'RU';
}

document.addEventListener('DOMContentLoaded', function () {
  updateThemeBtn();
  updateLangBtn();
});
