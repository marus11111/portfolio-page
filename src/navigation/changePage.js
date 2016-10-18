import {containers} from '../helpers/getDOMElements';
import {hideMenu, showMenu} from './hideShowMenu';
import {removeClass} from '../helpers/removeClass';

let page = 0;

const changePageDown = (number) => {
    if (page==0){
        hideMenu();    
    }
    while (number > page){
        containers[page].style.opacity = 0;
        containers[page].style.top = 0;
        page++; 
    }
    containers[page].style.top = 0;
}
    
const changePageUp = (number) => {
    while (number < page){
        containers[page].style.top = '100%';
        containers[page].style.opacity = 1;
        page--;
    }
    containers[page].style.opacity = 1;
}

const changePage = (number) => {
    
    removeClass(containers[page], 'repeating-animations');
    hideMenu(); 
    
    if (number > page){
        changePageDown(number);
    }
    else if (number < page){
        changePageUp(number);
    }
    
    containers[page].className += ' repeating-animations';
    if (page==0){
        setTimeout(showMenu, 250);   
    }
}

export {changePage, page};