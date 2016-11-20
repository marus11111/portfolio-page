import CSSProps from '../helpers/getCSSProps';
import {clip} from '../mastheadEffect/clipFunction';
import {page} from '../navigation/changePage';
import {resizeMenu, resizeMinimizedMenu} from '../navigation/resizeMenu';
import {menuOnPage} from '../navigation/hideShowMenu';
import {clippedAreas, shadows} from '../helpers/getDOMElements';
import {optionsClip} from '../mastheadEffect/mastheadEffectOptions';

const {clipProp} = CSSProps;


//Get initial client size for masthead effect and menu sizing
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

const resizeHandler = () => {
    
    //Get current client size
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    
    
    //Resize clipped elements if they were clipped with clip property 
    //which doesn't accept percentages or viewport units as arguments
    if (clipProp === 'clip'){
        clippedAreas.forEach((clippedArea, i) =>{
            clip(clippedArea, shadows[i], ...optionsClip[i], clipProp, clientWidth, clientHeight);
        }); 
    }
    
    //Determine which function that resizes menu is appropriate
    if (page==0 || menuOnPage){
        resizeMenu();
    }
    else {
        resizeMinimizedMenu();
    }
}

window.addEventListener('resize', resizeHandler);

export {clientWidth, clientHeight};
