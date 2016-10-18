import {clipProp} from '../helpers/getCSSProps';
import {clip} from '../headerEffect/clipFunction';
import {page} from '../navigation/changePage';
import {resizeMenu, resizeMinimizedMenu} from '../navigation/resizeMenu';
import {menuOnPage} from '../navigation/hideShowMenu';

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

const resizeHandler = () => {
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    
    if (clipProp === 'clip'){
        for (let i=0; i<parallaxElements.length; i++){
        clip(parallaxElements[i], shadows[i], ...optionsClip[i], clipProp, clientWidth, clientHeight);
        }
    }
    
    if (page==0 || menuOnPage){
        resizeMenu();
    }
    else {
        resizeMinimizedMenu();
    }
}

export {resizeHandler, clientWidth, clientHeight};
