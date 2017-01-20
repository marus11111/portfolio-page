import {
  menu,
  menuArrow,
  menuExit,
  containers
} from '../helpers/getDOMElements';
import CSSProps from '../helpers/getCSSProps';
import removeClasses from '../helpers/removeClasses';
import {
  page
} from './changePage';

let {
  filter
} = CSSProps;

//Track whether menu is open
let fullMenuOnPage = false;

const removeBlur = () => {
  filter ? removeClasses(containers[page], 'container--blur') :
    removeClasses(containers[page], 'container--darken');
}

//Function that hides menu
const minimizeMenu = () => {
  fullMenuOnPage = false;
  menu.className += ' menu--minimized';
  removeClasses(menu, 'menu--home', 'menu--full');
  removeBlur();
}

//Function that shows menu
const showHomeMenu = () => {
  fullMenuOnPage = false;
  menu.className += ' menu--home';
  removeClasses(menu, 'menu--minimized', 'menu--full');
  removeBlur();
}

//Function that shows menu after clicking on arrow on the bottom-bar
const showFullMenu = () => {
  fullMenuOnPage = true;
  menu.className += ' menu--full';
  removeClasses(menu, 'menu--home', 'menu--minimized');
  filter ? containers[page].className += ' container--blur' :
    containers[page].className += ' container--darken';
}

menuExit.addEventListener('click', minimizeMenu);
menuArrow.addEventListener('click', showFullMenu);

export {
  minimizeMenu,
  showHomeMenu,
  showFullMenu,
  fullMenuOnPage
};
