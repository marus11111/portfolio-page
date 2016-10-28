import {menuArrow, containers} from '../helpers/getDOMElements';
import {showMenuOnArrow, hideMenu, menuOnPage} from '../navigation/hideShowMenu';
import {changePage, page} from '../navigation/changePage';
import {changeProject, project} from '../navigation/changeProject';


let startX;
let startY;
let target;

const touchStart = (e) => {
    let touch = e.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    target = e.target;
}

const touchMove = (e) => {
    e.preventDefault;
}

const touchEnd = (e) => {
    let touch = e.changedTouches[0];
    let x = touch.pageX;
    let y = touch.pageY;
    let verticalChange = (() => {
        if(Math.abs(y - startY) > Math.abs(x-startX)){
            return y-startY;
        }
        else {
            return 0;
        }
    })();
    let horizontalChange = (() => {
        if(Math.abs(x - startX) > Math.abs(y - startY)){
           return x-startX
           }
           else {
           return 0;
           }
    })();  
    if (menuOnPage){
        if (verticalChange > 50){
            hideMenu();
        }
    }
    else if (target == menuArrow) {
        if (verticalChange < -50 || (verticalChange == 0 && horizontalChange == 0)){
           showMenuOnArrow(); 
        }
    }
    else if (page == 2){
        if (project < 2 && (verticalChange < -50 || horizontalChange < -50)) {
            changeProject(project+1);
        }
        else if (project > 0 && (verticalChange > 50 || horizontalChange > 50)){
            changeProject(project-1);
        }
        else if (project == 2 && (verticalChange < -50 || horizontalChange < -50)){
            changePage(page+1);
        }
        else if (project == 0 && (verticalChange > 50 || horizontalChange > 50)){
            changePage(page-1);
        }
    }
    else if (verticalChange < -50 && page < containers.length-1){
        changePage(page+1);
    }
    else if (verticalChange > 50 && page > 0){
        changePage(page-1)
    }
}

window.addEventListener('touchstart', touchStart);
window.addEventListener('touchmove', touchMove);
window.addEventListener('touchend', touchEnd);