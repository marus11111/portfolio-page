import CSSProps from '../helpers/getCSSProps';
import {clip} from '../headerEffect/clipFunction';
import {page} from '../navigation/changePage';
import {resizeMenu, resizeMinimizedMenu} from '../navigation/resizeMenu';
import {menuOnPage} from '../navigation/hideShowMenu';
import {parallaxElements, shadows} from '../helpers/getDOMElements';
import {optionsClip} from '../headerEffect/headerEffectOptions';

const {clipProp} = CSSProps;

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

const resizeHandler = () => {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    
    if (clipProp === 'clip'){
        parallaxElements.forEach((parallaxElement, i) =>{
            clip(parallaxElement, shadows[i], ...optionsClip[i], clipProp, clientWidth, clientHeight);
        }); 
    }
    
    if (page==0 || menuOnPage){
        resizeMenu();
    }
    else {
        resizeMinimizedMenu();
    }
}

window.addEventListener('resize', resizeHandler);

export {clientWidth, clientHeight};
