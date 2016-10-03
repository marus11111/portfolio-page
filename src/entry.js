import './entry.scss';
import {headerEffect} from './headerEffect';
import {mouseWheelHandler, keyDownHandler} from './changePage';

{
  
    window.onload = headerEffect();
    
    window.addEventListener('wheel', mouseWheelHandler);
    window.addEventListener('keydown', keyDownHandler);

}