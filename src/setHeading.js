import {heading, headingBorders} from './getDOMElements';
import {shadowProp, transitionProp} from './getCSSProps';

const setHeading = (docWidth, docHeight) => {
    
    let em = 0.05*docHeight;
        
    for (let i=0; i<heading.length; i++){
         heading[i].style.fontSize = `${em - i*0.2*em}px`;
         heading[i].style.lineHeight = `${2*em - i*0.4*em}px`;
    }
    
    for (let i=0; i<headingBorders.length; i++){
         headingBorders[i].style.left = `${0.5*docWidth - 4.4*em}px`;
         headingBorders[i].style.top = `${0.28*docHeight - 1.39*em}px`;
         headingBorders[i].style.width = `${8.8*em}px`;
         headingBorders[i].style.height = `${3*em}px`;
         headingBorders[i].style.borderColor = 'rgba(255,255,255,1)';
         setTimeout(()=> {
            headingBorders[i].style[transitionProp] = 'left 0s, top 0s, box-shadow 1s ease-out, background-color 1s linear';
        }, 2000);
    }
    
    setTimeout(()=> {
         headingBorders[0].style[shadowProp] = 'inset 0 0 5px 1px rgba(0,0,0,0.8)';
         headingBorders[0].style.backgroundColor = 'rgba(0,0,0,0.4)'
    }, 2000); 
}

export {setHeading};