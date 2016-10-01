import {transformOriginProp, transformProp} from './getCSSProps.js';



const scaleFunction = (element, shadow, scale) => {
    shadow.style[transformProp] = `scale(${scale})`;
    shadow.style.opacity = 1;
    element.style[transformProp] = `scale(${scale})`;
}

const clipPath = (element, shadow, scale, top, right, bottom, left, property, timeout) => {
    setTimeout(() => {
        shadow.style.top = `${top}%`;
        shadow.style.left = `${left}%`;
        shadow.style.width = `${100-left-right}%`;
        shadow.style.height = `${100-top-bottom}%`;
        element.style[transformOriginProp] = `${left}% ${top}%`;
        element.style[`${property}`] = `polygon(${left}% ${top}%, ${100-right}% ${top}%, ${100-right}% ${100-bottom}%, ${left}% ${100-bottom}%)`;
        element.style
        scaleFunction(element, shadow, scale);
    }, timeout)
}
  
const clip = (element, shadow, top, right, bottom, left, property, width, height) => {
    shadow.style.top = `${top}%`;
    shadow.style.left = `${left}%`;
    shadow.style.width = `${100-left-right}%`;
    shadow.style.height = `${100-top-bottom}%`;
    element.style[`${property}`] = `rect(${top/100*height}px, ${width-right/100*width}px, ${height-bottom/100*height}px, ${left/100*width}px)`;
    element.style[transformOriginProp] = `${left}% ${top}%`;
}

const initialClip = (element, shadow, scale, top, right, bottom, left, property, width, height, timeout) => {
    setTimeout(() => {
        clip(element, shadow, top, right, bottom, left, property, width, height);
        scaleFunction(element, shadow, scale);       
    }, timeout);  
}

export {clipPath, initialClip, clip};