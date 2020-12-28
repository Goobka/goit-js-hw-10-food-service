import './refs';
import menuItems from '../menu.json';
import menuTemplate from '../templates/menu-items.hbs';


const markup = menuTemplate(menuItems);

refs.galleryList.insertAdjacentHTML('beforeend', markup);