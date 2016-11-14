import {menu, floatedMenuElements} from '../helpers/getDOMElements';
import {clientWidth, clientHeight} from '../eventHandlers/resizeHandler';
import {menuOnPage} from './hideShowMenu';


const resizeMinimizedMenu = () => {
    menu.style.top = '95%';
    menu.style.height = '5%';
    if(clientHeight > clientWidth){
        menu.style.width = '100%';
    }
    else {
        if (clientHeight < 599){
            menu.style.top = '90%';
            menu.style.height = '10%';
        }
        menu.style.width = '40%';
    }
}

const resizeMenu = () => {
    if(clientHeight > clientWidth){
        menu.style.width = '7em';
        if (menuOnPage) {
            floatedMenuElements[0].style.marginTop = '6em';
            floatedMenuElements.slice(1).forEach((floatedElement) => {
                floatedElement.style.marginTop = '1em';
            });
            menu.style.height = '14.3em';
            menu.style.top = '23%';
        }
        else {
            floatedMenuElements.forEach((floatedElement) => {
                floatedElement.style.marginTop = '1em';
            });
            menu.style.height = '9.3em';
            menu.style.top = '50%'; 
        }
    }
    else {
        menu.style.width = '24em';
        if (menuOnPage) {
            floatedMenuElements.forEach((floatedElement) => {
                floatedElement.style.marginTop = '5.75em';
            });
            menu.style.height = '7.5em';
            menu.style.top = '36%';
        }
        else {
            floatedMenuElements.forEach((floatedElement) => {
                floatedElement.style.marginTop = '0.75em';
            });
            menu.style.height = '2.5em';
            menu.style.top = '65%'; 
        }
    }
}

export {resizeMenu, resizeMinimizedMenu};