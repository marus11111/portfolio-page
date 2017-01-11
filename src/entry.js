import './sass/entry.scss';
//import './sass/noJsStyle.scss';
import './pics/sprite.png';
import './pics/me.png';
import './pics/device-mockup.png';
import './polyfills/ie-touch';
import './navigation/initialProjectsSetup';
import './navigation/changePage';
import './navigation/changeProject';
import './navigation/hideShowMenu';
import './mastheadEffect/mastheadEffect';
import './eventHandlers/mouseWheelHandler';
import './eventHandlers/mouseMoveHandler';
import './eventHandlers/keyDownHandler';
import './eventHandlers/touchHandler';
import './eventHandlers/resizeHandler';
import './eventHandlers/menuItemClick';

//obfuscate email and tel
import {mail, tel} from './helpers/getDOMElements';

mail.addEventListener('click', () => {
    let name = 'wlodarcz.marek';
    let vendor = '@gmail.com';
    window.location = `mailto:${name}${vendor}`;
});
tel.addEventListener('click', () => {
    let partOfNumber = '864-116';
    window.location = `tel:+48-664-${partOfNumber}`;
});