import {makeArray} from './makeArray';


//Get DOM elements and create arrays out of selections of 
//multiple elements (for performance purposes and to be able to use forEach loop)
const containers = makeArray(document.getElementsByClassName('js_sel-container'));
const masthead = document.getElementById('masthead');
const clippedAreas = makeArray(document.getElementsByClassName('js_sel-clipped'));    
const shadows = makeArray(document.getElementsByClassName('js_sel-shadow'));
const menu = document.getElementById('menu');
const menuUl = document.getElementById('menu-ul');
const menuItems = makeArray(document.getElementsByClassName('js_sel-menu-items'));
const floatedMenuElements = makeArray(document.getElementsByClassName('js_sel-item-float'));
const menuArrow = document.getElementById('menu-arrow-icon');
const menuExit = document.getElementById('menu-exit-button');
const projectText = makeArray(document.getElementsByClassName('js_sel-project-text'));
const deviceMockups = makeArray(document.getElementsByClassName('js_sel-mockup'));

export {containers, masthead, clippedAreas, shadows, menu, menuUl, menuItems, floatedMenuElements, menuArrow, menuExit, projectText, deviceMockups};
    

