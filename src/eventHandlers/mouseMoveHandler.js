import CSSProps from '../helpers/getCSSProps';

const {
  transform
} = CSSProps;

export default (element, shadow, speedX, speedY, translateZ, mouseX, mouseY) => {

  //Turn off transitions that were necessary for initial masthead effect
  element.style.transition = 'none';
  shadow.style.transition = 'none';

  //Move clipped pieces of background according to the cursor movement;
  //also keep the transform values from mastheadEffect
  element.style[transform] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;
  shadow.style[transform] = `perspective(1000px) translate3D(${mouseX/speedX}px, ${mouseY/speedY}px, ${translateZ}px)`;
}
