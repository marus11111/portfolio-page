import {containers} from '../helpers/getDOMElements';
import {hideMenu, showMenu} from './hideShowMenu';
import {removeClass} from '../helpers/removeClass';


//Store current page number
let page = 0;

const changePageDown = (number) => {
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


//Go to the page given as argument of function
const changePage = (number) => {
    
    //Remove animation class from page we're leaving, 
    //so that animations can be reapplied when user visits the page again 
    removeClass(containers[page], 'repeating-animations');
    
    //Hide menu to the bar on the bottom of screen
    hideMenu(); 
    
    if (number > page){
        changePageDown(number);
    }
    else if (number < page){
        changePageUp(number);
    }
    
    //Apply animations to page where user arrived
    containers[page].className += ' repeating-animations';
    
    //If on home page, open menu 
    if (page==0){
        setTimeout(showMenu, 250);   
    }
}

export {changePage, page};