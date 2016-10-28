//translateZ was causing huge performance problems on Chrome and Opera (fps<15 during header animation),
//it was replaced with 2D scale, which gives the same visual effect but 
//3D will be restored once solution is found

import CSSProps from '../helpers/getCSSProps';

const {transformOrigin, transform} = CSSProps;

const transformFunction = (element, shadow, scale /*translateZ*/) => {
    //shadow.style[transform] = `perspective(1000px) translateZ(${translateZ}px)`;      
    //element.style[transform] = `perspective(1000px) translateZ(${translateZ}px)`;    
    shadow.style[transform] = `scale(${scale})`;
    element.style[transform] = `scale(${scale})`;
    shadow.style.boxShadow = '0px 5px 25px 5px rgba(0,0,0,0.8)';
}

const positionElements = (element, shadow, top, right, bottom, left) => {
    shadow.style.top = `${top}%`;
    shadow.style.left = `${left}%`;
    shadow.style.width = `${100-left-right}%`;
    shadow.style.height = `${100-top-bottom}%`;
    element.style[transformOrigin] = `${left+(100-left-right)/2}% ${top+(100-top-bottom)/2}%`; //center of clipped area, shadow transform-origin is 50 50 by default
}

const clipPath = (element, shadow, scale /*translateZ*/, top, right, bottom, left, property, timeout) => {
    setTimeout(() => {
        positionElements(element, shadow, top, right, bottom, left);
        element.style[`${property}`] = `polygon(${left}% ${top}%, ${100-right}% ${top}%, ${100-right}% ${100-bottom}%, ${left}% ${100-bottom}%)`;
        transformFunction(element, shadow, scale /*translateZ*/);
    }, timeout)
}
  
const clip = (element, shadow, top, right, bottom, left, property, width, height) => {
    positionElements(element, shadow, top, right, bottom, left);
    element.style[`${property}`] = `rect(${top/100*height}px, ${width-right/100*width}px, ${height-bottom/100*height}px, ${left/100*width}px)`;
}

const initialClip = (element, shadow, scale /*translateZ*/, top, right, bottom, left, property, width, height, timeout) => {
    setTimeout(() => {
        clip(element, shadow, top, right, bottom, left, property, width, height);
        transformFunction(element, shadow, scale /*translateZ*/);       
    }, timeout);  
}

export {clipPath, initialClip, clip};