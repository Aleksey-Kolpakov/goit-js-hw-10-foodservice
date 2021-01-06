import itemsTemplate from '../templates/galery-items.hbs'
import menuItems from '../menu.json';
import '../styles.css';
const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menuItems);
menuRef.insertAdjacentHTML('beforeend', markup);