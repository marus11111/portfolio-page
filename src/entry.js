import './entry.scss';
import {headerEffect} from './headerEffect';
import {mouseWheelHandler, keyDownHandler, changePage} from './changePage';
import {menuItems} from './getDOMElements';

{
  
    window.onload = headerEffect();
    
    window.addEventListener('wheel', mouseWheelHandler);
    window.addEventListener('keydown', keyDownHandler);
    
    for (let i=0; i<menuItems.length; i++){
        menuItems[i].addEventListener('click', ()=>{
            changePage(i);
        });
    }
}