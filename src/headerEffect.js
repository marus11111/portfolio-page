import {parallaxElements, shadows} from './getDOMElements';
import {optionsTranslate3D, optionsClip} from './transformOptions';
import {clipProp} from './getCSSProps';
import {clipPath, initialClip, clip} from './clipFunction';
import {mouseMoveHandler} from './mouseMoveHandler';
    
     
const headerEffect = () => {

    let baseWidth = window.innerWidth;
    let baseHeight = window.innerHeight;
    
    window.addEventListener('resize', () =>{
        baseWidth = window.innerWidth;
        baseHeight = window.innerHeight;
        if (clipProp === 'clip'){
            for (let i=0; i<parallaxElements.length; i++){
            clip(parallaxElements[i], shadows[i], ...optionsClip[i], clipProp, baseWidth, baseHeight);
            }
        }
    });

    if (/clippath/i.test(clipProp)){
        for (let i=0; i<parallaxElements.length; i++){
            clipPath(parallaxElements[i], shadows[i], optionsTranslate3D[i][2], ...optionsClip[i], clipProp, 0);
        }
    } 
    else if (clipProp === 'clip') {
        for (let i=0; i<parallaxElements.length; i++){
            initialClip(parallaxElements[i], shadows[i], optionsTranslate3D[i][2], ...optionsClip[i], clipProp, baseWidth, baseHeight, 0);
        } 
    }
    else { return; } 
        
    setTimeout(()=>{
        document.getElementsByTagName('header')[0].addEventListener('mousemove', (event) =>{
            let x = event.clientX - baseWidth/2;
            let y = event.clientY - baseHeight/2;
            for (let i=0; i<parallaxElements.length; i++){
                mouseMoveHandler(parallaxElements[i], shadows[i], ...optionsTranslate3D[i], x, y); 
            }
        })
    }, 2000);
}

export {headerEffect};