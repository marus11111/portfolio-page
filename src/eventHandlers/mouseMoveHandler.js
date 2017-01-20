import CSSProps from '../helpers/getCSSProps';

const {
  transform
} = CSSProps;

export default (element, shadow, speedX, speedY, scale, mouseX, mouseY) => {

  //Turn off transitions that were necessary for initial masthead effect
  element.style.transition = 'none';
  shadow.style.transition = 'none';

  //Move clipped pieces of background according to the cursor movement;
  //also keep the transform values from mastheadEffect
  element.style[transform] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
  shadow.style[transform] = `scale(${scale}) translate(${mouseX/speedX}px, ${mouseY/speedY}px)`;
}
