import {
  deviceMockups,
  projectText
} from '../helpers/getDOMElements';

//Under no-js conditions each project has to be shown in separate container
//Under js conditions all projects are being moved to one container
const initialProjectsSetup = () => {
  projectText.slice(1).forEach((text) => {
    projectText[0].parentNode.appendChild(text);
    text.className += ' fade-out';
  });
  deviceMockups.slice(1).forEach((mockup) => {
    deviceMockups[0].parentNode.appendChild(mockup);
    mockup.className += ' device-mockup--right fade-out';
  });
}

document.addEventListener('DOMContentLoaded', initialProjectsSetup);
