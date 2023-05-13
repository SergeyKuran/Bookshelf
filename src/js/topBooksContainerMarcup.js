import { bookItemMarcup } from "./bookItemMarcup";
 
/**
 * Повертає строку з розміткою книг
 * @param {Array} books - масив найпопулярніших книг певної категорії
 * @returns {string} строка з розміткою книг
 */
const createTopBooksMarcup = (books) => books.map(book => bookItemMarcup(book)).join('');

/**
 * Повертає розмітку контейнера з найпопулярнішими книгами певної категорії
 * @param {object}
 * @param {node} - елемент куди буде рендеритись розмітка
 * @returns {string} - розмітка контейнера
 */
const topBooksContainerMarcup = ({ list_name, books }, node) => {
  node.classList.remove('category__list');
  return `
<li class="category-top-books">
  <h3 class="category-top-books__title">${list_name}</h3>
  <ul class="category-top-books__list">${createTopBooksMarcup(books)}</ul>
  <button class="button category-top-books__button">See more</button>
</li>`;
};

export { topBooksContainerMarcup };