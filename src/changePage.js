import {containers} from './getDOMElements';

let scroll = true;    
let page = 0;

for (let page=1; page<containers.length; page++){
    containers[page].style.top = '100%';
}
    
const changePageDown = (number) => {
    while (page < number){
        containers[page].style.opacity = 0.5;
        containers[page].style.top = 0;
        page++; 
    }
    containers[page].style.top = 0;
}
    
const changePageUp = (number) => {
    while (page > number){
        containers[page].style.top = '100%';
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
            changePage(page+1);
        }
        else if (e.deltaY<0 && page>0){
            changePage(page-1);
        }
        
        scroll = false;
        
        setTimeout(() => {
        scroll=true;
        }, 1000);
    } 
}
    
const keyDownHandler = (e) => {
    let k = e.keyCode || e.which;
    
    if ((k==13 || k==32 || k==40 || k==39) && page<containers.length-1){                e.preventDefault();    
       changePage(page+1);  
    }
    else if ((k == 38 || k==37) && page>0){
       e.preventDefault();
       changePage(page-1);
    }
}
    
export {mouseWheelHandler, keyDownHandler, changePage};