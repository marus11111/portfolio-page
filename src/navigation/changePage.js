import {containers} from '../helpers/getDOMElements';
import {minimizeMenu, showHomeMenu, fullMenuOnPage} from './hideShowMenu';
import removeClasses from '../helpers/removeClasses';


//Store current page number
let page = 0;

const changePageDown = (number) => {
    while (number > page){
        containers[page].className += ' fade-out';
        containers[page + 1].className += ' container--up';
        page++; 
    }
}
    
const changePageUp = (number) => {
    while (number < page){
        removeClasses(containers[page], 'container--up');
        removeClasses(containers[page - 1], 'fade-out');
        page--;
    }
}


//Go to the page given as argument of function
const changePage = (number) => {
    
    //Remove animation class from page we're leaving, 
    //so that animations can be reapplied when user visits the page again 
    removeClasses(containers[page], 'repeating-animations');
    
    //If navigating to home page, open menu without home item and exit button
    //else and if currently menu is open, hide it
    if (number===0) {
        showHomeMenu();   
    }
    else if (page===0 || fullMenuOnPage) {
        minimizeMenu();
    }

    if (number > page){
        changePageDown(number);
    }
    else if (number < page){
        changePageUp(number);
    }
    
    //Apply animations to page where user arrived
    containers[page].className += ' repeating-animations';
}

export {changePage, page};