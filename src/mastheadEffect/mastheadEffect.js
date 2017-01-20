import {
  masthead,
  clippedAreas,
  shadows
} from '../helpers/getDOMElements';
import {
  optionsTransform,
  optionsClip
} from './mastheadEffectOptions';
import CSSProps from '../helpers/getCSSProps';
import {
  clipPath,
  initialClip,
  clip
} from './clipFunction';
import mouseMoveHandler from '../eventHandlers/mouseMoveHandler';
import {
  clientWidth,
  clientHeight
} from '../eventHandlers/resizeHandler';

const {
  clipProp
} = CSSProps;

const mastheadEffect = () => {

  //Determine whether clipPath or clip is available and run appropriate function
  if (/clippath/i.test(clipProp)) {
    clippedAreas.forEach((clippedArea, i) => {
      clipPath(clippedArea, shadows[i], optionsTransform[i][2], ...optionsClip[i], clipProp, 0);
    });
  } else if (clipProp === 'clip') {
    clippedAreas.forEach((clippedArea, i) => {
      initialClip(clippedArea, shadows[i], optionsTransform[i][2], ...optionsClip[i], clipProp, clientWidth, clientHeight, 0);
    });
  } else {
    return;
  }

  //Move clipped areas according to cursor position, but only after the initial animation is finished
  setTimeout(() => {
    masthead.addEventListener('mousemove', (event) => {
      let x = event.clientX - clientWidth / 2;
      let y = event.clientY - clientHeight / 2;
      clippedAreas.forEach((clippedArea, i) => {
        mouseMoveHandler(clippedArea, shadows[i], ...optionsTransform[i], x, y);
      });
    })
  }, 2000);
}

window.onload = mastheadEffect();
