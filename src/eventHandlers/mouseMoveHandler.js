import CSSProps from '../helpers/getCSSProps';

const {transform} = CSSProps;

const mouseMoveHandler = (element, shadow, speedX, speedY, scale /*translateZ*/, mouseX, mouseY) => {
        element.style.transition = 'none';
        shadow.style.transition = 'none';
        //element.style[transform] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;  - transform3D explanation in clipFunction.js
        //shadow.style[transform] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;
        element.style[transform] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
        shadow.style[transform] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
    }

export {mouseMoveHandler};