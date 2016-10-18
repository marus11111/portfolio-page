import {transitionProp, transformProp} from '../helpers/getCSSProps';

const mouseMoveHandler = (element, shadow, speedX, speedY, translateZ, mouseX, mouseY) => {
        element.style[transitionProp] = 'none';
        shadow.style[transitionProp] = 'none';
        element.style[transformProp] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;
        shadow.style[transformProp] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;
    }

export {mouseMoveHandler};