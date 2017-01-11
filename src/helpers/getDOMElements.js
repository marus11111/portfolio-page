import makeArray from './makeArray';


//Get DOM elements and create arrays out of selections of 
//multiple elements (for performance purposes and to be able to use array helpers)
const containers = makeArray(document.getElementsByClassName('js_sel-container'));
const masthead = document.getElementById('masthead');
const clippedAreas = makeArray(document.getElementsByClassName('js_sel-clipped'));    
const shadows = makeArray(document.getElementsByClassName('js_sel-shadow'));
const menu = document.getElementById('menu');
const menuItems = makeArray(document.getElementsByClassName('js_sel-menu-items'));
const menuArrow = document.getElementById('menu-arrow-icon');
const menuExit = document.getElementById('menu-exit-button');
const projectText = makeArray(document.getElementsByClassName('js_sel-project-text'));
const deviceMockups = makeArray(document.getElementsByClassName('js_sel-mockup'));
const mail = document.getElementById('mail');
const tel = document.getElementById('tel');

export {containers, masthead, clippedAreas, shadows, menu, menuItems, menuArrow, menuExit, projectText, deviceMockups, mail, tel};