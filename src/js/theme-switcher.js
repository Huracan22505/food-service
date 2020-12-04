const STORAGE_KEY = 'condition';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('.theme-switch__toggle'),
};

themeChecker();

refs.body.classList.add(Theme.LIGHT);

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(e) {
  refs.body.classList.toggle(Theme.DARK);

  const condition = e.target.checked;

  localStorage.setItem(STORAGE_KEY, condition);
}

function themeChecker() {
  const condition = localStorage.getItem(STORAGE_KEY);

  if (condition === 'true') {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
  }
}
