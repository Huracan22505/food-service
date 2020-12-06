import foodCardTpl from '../templates/food-card.hbs';
import menu from '../data/menu.json';

const menuContainer = document.querySelector('.js-menu');
const filterButton = document.querySelector('.filter-button');

filterButton.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(e) {
  menuContainer.innerHTML = '';

  createMenuCardMarkup(menu);
  menuContainer.insertAdjacentHTML('beforeend', cardMarkup);
}

let result = [];
console.log('result', result);

function onIngredientClick(e) {
  if (!e.target.classList.contains('tag-list__item')) {
    return;
  }
  let value = e.target.textContent;
  menu.map(el => {
    if (el.ingredients.includes(value)) {
      result.push(el);
    }
  });

  menuContainer.innerHTML = '';

  createMenuCardMarkup(result);
  menuContainer.insertAdjacentHTML('afterbegin', createMenuCardMarkup(result));

  result = [];
}

const cardMarkup = createMenuCardMarkup(menu);
menuContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuCardMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}

// const filterItem = document.querySelectorAll('.tag-list__item');
// const card = document.querySelectorAll('.menu__item');

menuContainer.addEventListener('click', onIngredientClick);
