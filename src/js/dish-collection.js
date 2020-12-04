import foodCardTpl from '../templates/food-card.hbs';
import menu from '../data/menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardMarkup = createMenuCardMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuCardMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}
