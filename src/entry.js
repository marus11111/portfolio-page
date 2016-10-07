import './entry.scss';
import {headerEffect} from './headerEffect';
import {mouseWheelHandler, keyDownHandler, changePage} from './changePage';
import {headerMenu} from './getDOMElements';

{
  
    window.onload = headerEffect();
    
    window.addEventListener('wheel', mouseWheelHandler);
    window.addEventListener('keydown', keyDownHandler);
    
    for (let i=0; i<headerMenu.length; i++){
        headerMenu[i].addEventListener('click', ()=>{
            changePage(i+1);
        });
    }

}