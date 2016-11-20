import {menuArrow, containers} from '../helpers/getDOMElements';
import {showMenuOnArrow, hideMenu, menuOnPage} from '../navigation/hideShowMenu';
import {changePage, page} from '../navigation/changePage';
import {changeProject, project} from '../navigation/changeProject';

//Declare variables to store touch coordinates and created click event
let startX;
let startY;
let target;
let clickEvent;

//Default behavior will be prevented on touchstart so we need 
//to create click event, which will be fired from js
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
        
    //Prevent default scrolling 
    e.preventDefault();
    
    //Save touchstart coordinates and target
    let touch = e.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    target = e.target;
}

const touchEnd = (e) => {
    //Get touchend coordinates
    let touch = e.changedTouches[0];
    let x = touch.pageX;
    let y = touch.pageY;
    
    
    //Determine primary direction of finger move 
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

    
    //Depending on target, direction and amount of finger movement 
    //either fire click, change page, change project, open menu or close menu
    if (verticalChange == 0 && horizontalChange == 0){
        if (typeof target.click == 'function'){
            target.click();
        }
        else {
            target.dispatchEvent(clickEvent);
        }
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
    else if (page == 3){
        if (project < 1 && (verticalChange < 0 || horizontalChange < 0)) {
            changeProject(project+1);
        }
        else if (project > 0 && (verticalChange > 0 || horizontalChange > 0)){
            changeProject(project-1);
        }
        else if (project == 1 && (verticalChange < 0 || horizontalChange < 0)){
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
    
    //Only fire touch handlers if there is one finger on the screen so 
    //that default behavior of multitouch events isn't prevented 
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