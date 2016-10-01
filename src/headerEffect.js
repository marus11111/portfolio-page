import {parallaxElements, shadows} from './getDOMElements';
import {optionsScale, optionsClip, optionsTranslate} from './transformOptions';
import {clipProp} from './getCSSProps';
import {clipPath, clip} from './clipFunction';
import {mouseMoveHandler} from './mouseMoveHandler';
    
     
const headerEffect = () => {

    let baseWidth = window.innerWidth;
    let baseHeight = window.innerHeight;

    if (/clippath/i.test(clipProp)){
        for (let i=0; i<parallaxElements.length; i++){
            clipPath(parallaxElements[i], shadows[i], optionsScale[i], ...optionsClip[i], clipProp, 0);
        }
    } 
    else if (clipProp === 'clip') {
        for (let i=0; i<parallaxElements.length; i++){
            clip(parallaxElements[i], shadows[i], optionsScale[i], ...optionsClip[i], clipProp, baseWidth, baseHeight, 0);
        } 
    }
    else { return; } 
        
    setTimeout(()=>{
        document.getElementsByTagName('header')[0].addEventListener('mousemove', (event) =>{
            let x = event.clientX - baseWidth/2;
            let y = event.clientY - baseHeight/2;
            for (let i=0; i<parallaxElements.length; i++){
                mouseMoveHandler(parallaxElements[i], shadows[i], optionsScale[i], ...optionsTranslate[i], x, y); 
            }
        })
    }, 2000);
}

export {headerEffect};