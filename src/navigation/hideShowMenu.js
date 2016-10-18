import {menuUl, menu, menuItems, menuArrow, menuExit, containers} from '../helpers/getDOMElements';
import {filterProp} from '../helpers/getCSSProps';
import {resizeMenu, resizeMinimizedMenu} from './resizeMenu';
import {page} from './changePage';

let menuOnPage = false;

const hideMenu = () => {
    menu.style.color = 'rgba(255, 255, 255, 0)';
    menuUl.style.opacity = 0;
    menuItems[0].style.opacity = 0;
    setTimeout(() => {
        resizeMinimizedMenu();
        menuItems[0].style.display = 'none';
        menuUl.style.display = 'none';
        menuExit.style.display = 'none';
        menuArrow.style.display = 'block';
        menuArrow.style.opacity = 1;
        if (filterProp){
            containers[page].style[filterProp] = 'none';  
        }
        else {
            containers[page].style.opacity = 1;
        }
    }, 250);
    menuOnPage = false;
}

const showMenu = () => {
    menuArrow.style.opacity = 0;
    resizeMenu();
    setTimeout(() => {
        menuArrow.style.display = 'none';
        menuUl.style.display = 'block';
        menuUl.style.opacity = 1;
        menu.style.color = 'rgba(255, 255, 255, 1)';
    },400);
}

const showMenuOnArrow = () => {
    menuOnPage = true;
    showMenu();
    setTimeout(() => {
        menuExit.style.display = 'block';
        menuExit.style.opacity = 1;
        menuItems[0].style.display = 'block';
        menuItems[0].style.opacity = 1;
    },400);
    if (filterProp){
        containers[page].style[filterProp] = 'blur(5px) brightness(0.5)';  
    }
    else {
        containers[page].style.opacity = 0.2;
    }
}


export {hideMenu, showMenu, showMenuOnArrow, menuOnPage};