import './entry.scss';
import './js/polyfills/ie-touch';
import './js/navigation/initialProjectsSetup';
import './js/navigation/changePage';
import './js/navigation/changeProject';
import './js/navigation/hideShowMenu';
import './js/mastheadEffect/mastheadEffect';
import './js/eventHandlers/mouseWheelHandler';
import './js/eventHandlers/mouseMoveHandler';
import './js/eventHandlers/keyDownHandler';
import './js/eventHandlers/touchHandler';
import './js/eventHandlers/resizeHandler';
import './js/eventHandlers/menuItemClick';

//obfuscate email and tel
import {
  mail,
  tel
} from './js/helpers/getDOMElements';

mail.addEventListener('click', () => {
  let name = 'wlodarcz.marek';
  let vendor = '@gmail.com';
  window.location = `mailto:${name}${vendor}`;
});
tel.addEventListener('click', () => {
  let partOfNumber = '864-116';
  window.location = `tel:+48-664-${partOfNumber}`;
});
