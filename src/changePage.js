import {containers, deviceMockups} from './getDOMElements';

let scroll = true;    
let page = 0;
let project = 0;

for (let i=1; i<containers.length; i++){
    containers[i].style.top = '100%';
}

for (let i=1; i<deviceMockups.length; i++){
    deviceMockups[0].parentNode.appendChild(deviceMockups[i]);
    deviceMockups[i].style.top = '30%';
    deviceMockups[i].style.left = '200%';
    deviceMockups[i].style.opacity = 0;
}

const changeProjectDown = () => {
    deviceMockups[project].style.top = '-200%';
    deviceMockups[project].style.opacity = 0;
    project++;
    deviceMockups[project].style.left = '50%';
    deviceMockups[project].style.opacity = 1;
}

const changeProjectUp = () => {
    deviceMockups[project].style.left = '200%';
    deviceMockups[project].style.opacity = 0;
    project--;
    deviceMockups[project].style.top = '30%';
    deviceMockups[project].style.opacity = 1;
}
    
const changePageDown = (number) => {
    while (page < number){
        containers[page].style.opacity = 0;
        containers[page].style.top = 0;
        page++; 
    }
    containers[page].style.top = 0;
}
    
const changePageUp = (number) => {
    while (page > number){
        containers[page].style.top = '100%';
        containers[page].style.opacity = 1;
        page--;
    }
    containers[page].style.opacity = 1;
}

const changePage = (number) => {
    if (number > page){
        changePageDown(number);
    }
    else if (page > number){
        changePageUp(number);
    }
}

const mouseWheelHandler = (e) => {
    e.preventDefault();
    if(scroll){
        if (e.deltaY>0 && page<containers.length-1){
            if (page==2 && project<2){
                changeProjectDown();
            }
            else {
                changePage(page+1);
            }
        }
        else if (e.deltaY<0 && page>0){
            if(page==2 && project>0){
                changeProjectUp();
            }
            else {
                changePage(page-1); 
            }   
        }
        
        scroll = false;
        
        setTimeout(() => {
        scroll=true;
        }, 1000);
    } 
}
    
const keyDownHandler = (e) => {
    let k = e.keyCode || e.which;
    if ((k==13 || k==32 || k==40 || k==39) && page<containers.length-1){
        e.preventDefault();
        if (page==2 && project<2){
            changeProjectDown();
        }
        else {
            changePage(page+1);
        }
    }
    else if ((k == 38 || k==37) && page>0){
        e.preventDefault();
        if(page==2 && project>0){
            changeProjectUp();
        }
        else {
            changePage(page-1); 
        }
    }
}
    
export {mouseWheelHandler, keyDownHandler, changePage};