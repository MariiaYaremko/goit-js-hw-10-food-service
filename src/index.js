import './sass/main.scss';
import menuTpl from './templates/menu-card.hbs';
import menu from './partials/menu.json';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.body,
  checkbox: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('.js-menu'),
};

refs.checkbox.checked = JSON.parse(localStorage.getItem('checkboxStatus'));

refs.checkbox.checked ? refs.body.classList.add(Theme.DARK) : refs.body.classList.add(Theme.LIGHT);

refs.checkbox.addEventListener('change', ifCheckboxWasChanged);

makeMenuMarkup(menu);

function ifCheckboxWasChanged(e) {
  if (e.currentTarget.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);

    localStorage.setItem('checkboxStatus', refs.checkbox.checked);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);

    localStorage.setItem('checkboxStatus', refs.checkbox.checked);
  }
}

function makeMenuMarkup(items) {
  const markup = items.map(item => menuTpl(item)).join('');

  refs.menu.insertAdjacentHTML('beforeend', markup);
}