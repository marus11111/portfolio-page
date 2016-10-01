import {transitionProp, transformProp} from './getCSSProps';

const mouseMoveHandler = (element, shadow, scale, speedX, speedY, mouseX, mouseY) => {
        element.style[transitionProp] = 'none';
        shadow.style[transitionProp] = 'none';
        element.style[transformProp] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
        shadow.style[transformProp] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
    }

export {mouseMoveHandler};