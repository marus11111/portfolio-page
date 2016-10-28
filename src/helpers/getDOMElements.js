import {makeArray} from './makeArray';

let parallaxElements = makeArray(document.getElementsByClassName('parallax'));    
let shadows = makeArray(document.getElementsByClassName('shadow'));
let containers = makeArray(document.getElementsByClassName('container'));
let menu = document.getElementsByTagName('nav')[0];
let menuItems = makeArray(document.getElementsByClassName('menu-item'));
let menuUl = document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];
let floatedMenuElements = makeArray(document.getElementsByClassName('menu-float'));
let menuArrow = document.getElementById('menu-arrow-icon');
let menuExit = document.getElementById('menu-exit-button');
let projectText = makeArray(document.getElementsByClassName('project-text'));
let deviceMockups = makeArray(document.getElementsByClassName('device-mockups'));

export {parallaxElements, shadows, containers, menu, menuItems, menuUl, floatedMenuElements, menuArrow, menuExit, projectText, deviceMockups};
    

