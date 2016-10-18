import {transformOriginProp, transformProp, shadowProp} from '../helpers/getCSSProps';

const translateZFunction = (element, shadow, translateZ) => {
    shadow.style[transformProp] = `perspective(1000px) translateZ(${translateZ}px)`;
    shadow.style[shadowProp] = '0px 5px 25px 5px rgba(0,0,0,0.8)';
    element.style[transformProp] = `perspective(1000px) translateZ(${translateZ}px)`;
}

const positionElements = (element, shadow, top, right, bottom, left) => {
    shadow.style.top = `${top}%`;
    shadow.style.left = `${left}%`;
    shadow.style.width = `${100-left-right}%`;
    shadow.style.height = `${100-top-bottom}%`;
    element.style[transformOriginProp] = `${left}% ${top}%`;
}

const clipPath = (element, shadow, translateZ, top, right, bottom, left, property, timeout) => {
    setTimeout(() => {
        positionElements(element, shadow, top, right, bottom, left);
        element.style[`${property}`] = `polygon(${left}% ${top}%, ${100-right}% ${top}%, ${100-right}% ${100-bottom}%, ${left}% ${100-bottom}%)`;
        translateZFunction(element, shadow, translateZ);
    }, timeout)
}
  
const clip = (element, shadow, top, right, bottom, left, property, width, height) => {
    positionElements(element, shadow, top, right, bottom, left);
    element.style[`${property}`] = `rect(${top/100*height}px, ${width-right/100*width}px, ${height-bottom/100*height}px, ${left/100*width}px)`;
}

const initialClip = (element, shadow, translateZ, top, right, bottom, left, property, width, height, timeout) => {
    setTimeout(() => {
        clip(element, shadow, top, right, bottom, left, property, width, height);
        translateZFunction(element, shadow, translateZ);       
    }, timeout);  
}

export {clipPath, initialClip, clip};