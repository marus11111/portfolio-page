import {parallaxElements, shadows} from '../helpers/getDOMElements';
import {optionsTranslate3D, optionsClip} from './transformOptions';
import {clipProp} from '../helpers/getCSSProps';
import {clipPath, initialClip, clip} from './clipFunction';
import {mouseMoveHandler} from '../eventHandlers/mouseMoveHandler';
import {clientWidth, clientHeight} from '../eventHandlers/resizeHandler';
    
     
const headerEffect = () => {
    
    if (/clippath/i.test(clipProp)){
        parallaxElements.forEach((parallaxElement, i) => {
            clipPath(parallaxElement, shadows[i], optionsTranslate3D[i][2], ...optionsClip[i], clipProp, 0);
        });
    } 
    else if (clipProp === 'clip') {
        parallaxElements.forEach((parallaxElement, i) => {
            initialClip(parallaxElement, shadows[i], optionsTranslate3D[i][2], ...optionsClip[i], clipProp, clientWidth, clientHeight, 0);
        });
    }
    else { return; }
        
    setTimeout(()=>{
        document.getElementsByTagName('header')[0].addEventListener('mousemove', (event) =>{
            let x = event.clientX - clientWidth/2;
            let y = event.clientY - clientHeight/2;
            parallaxElements.forEach((parallaxElement, i) => {
                mouseMoveHandler(parallaxElement, shadows[i], ...optionsTranslate3D[i], x, y);
            }); 
        })
    }, 2000);
}

export {headerEffect};