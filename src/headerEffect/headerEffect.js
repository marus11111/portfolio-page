import {parallaxElements, shadows} from '../helpers/getDOMElements';
import {optionsTransform, optionsClip} from './headerEffectOptions';
import CSSProps from '../helpers/getCSSProps';
import {clipPath, initialClip, clip} from './clipFunction';
import {mouseMoveHandler} from '../eventHandlers/mouseMoveHandler';
import {clientWidth, clientHeight} from '../eventHandlers/resizeHandler';
    
const {clipProp} = CSSProps;   

const headerEffect = () => {
    
    if (/clippath/i.test(clipProp)){
        parallaxElements.forEach((parallaxElement, i) => {
            clipPath(parallaxElement, shadows[i], optionsTransform[i][2], ...optionsClip[i], clipProp, 0);
        });
    } 
    else if (clipProp === 'clip') {
        parallaxElements.forEach((parallaxElement, i) => {
            initialClip(parallaxElement, shadows[i], optionsTransform[i][2], ...optionsClip[i], clipProp, clientWidth, clientHeight, 0);
        });
    }
    else { return; }
       
    setTimeout(()=>{
        document.getElementsByTagName('header')[0].addEventListener('mousemove', (event) =>{
            let x = event.clientX - clientWidth/2;
            let y = event.clientY - clientHeight/2;
            parallaxElements.forEach((parallaxElement, i) => {
                mouseMoveHandler(parallaxElement, shadows[i], ...optionsTransform[i], x, y);
            }); 
        })
    }, 2000);
}

window.onload = headerEffect();