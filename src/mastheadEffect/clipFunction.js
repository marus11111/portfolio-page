import CSSProps from '../helpers/getCSSProps';

const {transformOrigin, transform} = CSSProps;

//Make clipped areas bigger - gives the same visual effect of moving
//towards user as 3d transform does, but 3d transform creates problems
//with performance on my laptop on chrome 54/windows 10  
const transformFunction = (element, shadow, scale) => {
    shadow.style[transform] = `scale(${scale})`;
    element.style[transform] = `scale(${scale})`;   
    shadow.style.boxShadow = '0px 5px 25px 5px rgba(0,0,0,0.8)';
}

//Line up clipped areas with corresponding shadows
const positionElements = (element, shadow, top, right, bottom, left) => {
    shadow.style.top = `${top}%`;
    shadow.style.left = `${left}%`;
    shadow.style.width = `${100-left-right}%`;
    shadow.style.height = `${100-top-bottom}%`;
    element.style[transformOrigin] = `${left+(100-left-right)/2}% ${top+(100-top-bottom)/2}%`; //center of clipped area; shadow transform-origin is 50 50 by default
}

//Create masthead effect with clipPath property
const clipPath = (element, shadow, scale, top, right, bottom, left, property, timeout) => {
    setTimeout(() => {
        positionElements(element, shadow, top, right, bottom, left);
        element.style[`${property}`] = `polygon(${left}% ${top}%, ${100-right}% ${top}%, ${100-right}% ${100-bottom}%, ${left}% ${100-bottom}%)`;
        transformFunction(element, shadow, scale);
    }, timeout)
}

//Clip areas with clip property (only if clipPath isn't available)
const clip = (element, shadow, top, right, bottom, left, property, width, height) => {
    positionElements(element, shadow, top, right, bottom, left);
    element.style[`${property}`] = `rect(${top/100*height}px, ${width-right/100*width}px, ${height-bottom/100*height}px, ${left/100*width}px)`;
}

//Create masthead effect with clip property - clip alone had to be in a 
//separate function, so that it could be used wihout transform when window is resized
const initialClip = (element, shadow, scale, top, right, bottom, left, property, width, height, timeout) => {
    setTimeout(() => {
        clip(element, shadow, top, right, bottom, left, property, width, height);
        transformFunction(element, shadow, scale);       
    }, timeout);  
}

export {clipPath, initialClip, clip};