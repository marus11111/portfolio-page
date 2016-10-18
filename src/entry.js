import './sass/entry.scss';
import './sass/noJsStyle.scss'
import './polyfills/ie-touch';
import {headerEffect} from './headerEffect/headerEffect';
import {mouseWheelHandler} from './eventHandlers/mouseWheelHandler';
import {keyDownHandler} from './eventHandlers/keyDownHandler';
import {touchStart, touchMove, touchEnd} from './eventHandlers/touchHandler';
import {resizeHandler} from './eventHandlers/resizeHandler';
import {hideMenu, showMenuOnArrow} from './navigation/hideShowMenu';
import {changePage} from './navigation/changePage';
import {changeProject} from './navigation/changeProject';
import {initialProjectsSetup} from './navigation/initialProjectsSetup';
import {menuItems, menuArrow, menuExit} from './helpers/getDOMElements';

document.addEventListener('DOMContentLoaded', initialProjectsSetup);
window.onload = headerEffect();

window.addEventListener('resize', resizeHandler);
window.addEventListener('wheel', mouseWheelHandler);
window.addEventListener('keydown', keyDownHandler);
menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener('click', (e)=>{
        e.preventDefault();
        if (i<=2) {
            changeProject(0);
        }
        else if (i==3) {
            changeProject(2);
        }
        changePage(i);
    });
});
window.addEventListener('touchstart', touchStart);
window.addEventListener('touchmove', touchMove);
window.addEventListener('touchend', touchEnd);
menuExit.addEventListener('click', hideMenu);
menuArrow.addEventListener('click', showMenuOnArrow);
    
