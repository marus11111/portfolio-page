import {transformOriginProp, transformProp} from './getCSSProps.js';

const clipPath = (element, shadow, scale, top, right, bottom, left, property, timeout) => {
    setTimeout(() => {
        shadow.style.top = `${top}%`;
        shadow.style.left = `${left}%`;
        shadow.style.width = `${100-left-right}%`;
        shadow.style.height = `${100-top-bottom}%`;
        element.style[transformOriginProp] = `${left}% ${top}%`;
        element.style[`${property}`] = `polygon(${left}% ${top}%, ${100-right}% ${top}%, ${100-right}% ${100-bottom}%, ${left}% ${100-bottom}%)`;
        element.style
        shadow.style[transformProp] = `scale(${scale})`;
        shadow.style.opacity = 1;
        element.style[transformProp] = `scale(${scale})`;
    }, timeout)
}
    
const clip = (element, shadow, scale, top, right, bottom, left, property, width, height, timeout) => {
    setTimeout(() => {
        shadow.style.top = `${top}%`;
        shadow.style.left = `${left}%`;
        shadow.style.width = `${100-left-right}%`;
        shadow.style.height = `${100-top-bottom}%`;
        element.style[`${property}`] = `rect(${top/100*height}px, ${width-right/100*width}px, ${height-bottom/100*height}px, ${left/100*width}px)`;
        element.style[transformOriginProp] = `${left}% ${top}%`;
        shadow.style[transformProp] = `scale(${scale})`;
        shadow.style.opacity = 1;
        element.style[transformProp] = `scale(${scale})`;       
    }, timeout);  
}

export {clipPath, clip};