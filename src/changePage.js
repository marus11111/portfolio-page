import {containers} from './getDOMElements';

let scroll = true;    
let page = 0;

for (let page=1; page<containers.length; page++){
    containers[page].style.top = '100%';
}
    
const changePageDown = () => {
    containers[page].style.opacity = 0.5;
    page++;
    containers[page].style.top = 0;
}
    
const changePageUp = () => {
    containers[page].style.top = '100%';
    page--;
    containers[page].style.opacity = 1;
}

const mouseWheelHandler = (e) => {
    e.preventDefault();
    if(scroll){
        if (e.deltaY>0 && page<containers.length-1){
            changePageDown();
        }
        else if (e.deltaY<0 && page>0){
            changePageUp();
        }
        
        scroll = false;
        
        setTimeout(() => {
        scroll=true;
        }, 1000);
    } 
}
    
const keyDownHandler = (event) => {
    let e = event || window.event;
    let k = e.keyCode || e.which;
    if ((k==13 || k==32 || k==40 || k==39) && page<containers.length-1){                e.preventDefault();    
       changePageDown();  
    }
       else if ((k == 38 || k==37) && page>0){
       e.preventDefault();
       changePageUp();  
       }
}
    
export {mouseWheelHandler, keyDownHandler};