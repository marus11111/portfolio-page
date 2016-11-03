import {menuArrow, containers} from '../helpers/getDOMElements';
import {showMenuOnArrow, hideMenu, menuOnPage} from '../navigation/hideShowMenu';
import {changePage, page} from '../navigation/changePage';
import {changeProject, project} from '../navigation/changeProject';

let startX;
let startY;
let target;
let clickEvent;

if(typeof MouseEvent == 'function'){
    clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    }); 
}
else {
    clickEvent = document.createEvent('MouseEvent');
    clickEvent.initEvent('click', false, true);  
}

const touchStart = (e) => {
    e.preventDefault();
    let touch = e.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    target = e.target;
}

const touchEnd = (e) => {
    let touch = e.changedTouches[0];
    let x = touch.pageX;
    let y = touch.pageY;
    let verticalChange = (() => {
        if(Math.abs(y - startY) > 50 && (Math.abs(y - startY) > Math.abs(x-startX))){
            return y-startY;
        }
        else {
            return 0;
        }
    })();
    let horizontalChange = (() => {
        if(Math.abs(x - startX) > 50 && (Math.abs(x - startX) > Math.abs(y - startY))){
           return x-startX;
        }
        else {
           return 0;
        }
    })();

    if (verticalChange == 0 && horizontalChange == 0){
        target.dispatchEvent(clickEvent); 
    }
    else if (menuOnPage){
        if (verticalChange > 0){
            hideMenu();
        }
    }
    else if (target == menuArrow) {
        if (verticalChange < 0) {
           showMenuOnArrow(); 
        }
    }
    else if (page == 2){
        if (project < 2 && (verticalChange < 0 || horizontalChange < 0)) {
            changeProject(project+1);
        }
        else if (project > 0 && (verticalChange > 0 || horizontalChange > 0)){
            changeProject(project-1);
        }
        else if (project == 2 && (verticalChange < 0 || horizontalChange < 0)){
            changePage(page+1);
        }
        else if (project == 0 && (verticalChange > 0 || horizontalChange > 0)){
            changePage(page-1);
        }
    }
    else if (verticalChange < 0 && page < containers.length-1){
        changePage(page+1);
    }
    else if (verticalChange > 0 && page > 0){
        changePage(page-1)
    }
}

window.addEventListener('touchstart', (event) => {
    let e = event || window.event;
    if(e.touches.length == 1){
        touchStart(e); 
    }
});
window.addEventListener('touchend', (event) => {
    let e = event || window.event;
    if(e.changedTouches.length == 1){
        touchEnd(e); 
    }
});