import './entry.scss';
import {headerEffect} from './headerEffect.js';

{
    
    const mouseMoveHandler = (element, shadow, scale, speedX, speedY, mouseX, mouseY) => {
        element.style[transitionProp] = '';
        shadow.style[transitionProp] = '';
        
    }
  
    window.onload = headerEffect();

}