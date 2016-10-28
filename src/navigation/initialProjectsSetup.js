import {deviceMockups, projectText} from '../helpers/getDOMElements';

const initialProjectsSetup = () => {
    projectText.slice(1).forEach((text) => {
        projectText[0].parentNode.appendChild(text);
        text.style.opacity = 0;
    });
    deviceMockups.slice(1).forEach((mockup) => {
        deviceMockups[0].parentNode.appendChild(mockup);
        mockup.style.left = '200%';
        mockup.style.opacity = 0;
    });
}

document.addEventListener('DOMContentLoaded', initialProjectsSetup);