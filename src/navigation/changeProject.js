import {deviceMockups, projectText} from '../helpers/getDOMElements';
import removeClasses from '../helpers/removeClasses';

//Store the number of project currently being shown on the 'projects' page
let project = 0;

//Change project to the one given as function's argument
const changeProject = (number) => {
    if (number > project){
        while (number > project){
            projectText[project].className += ' fade-out';
            deviceMockups[project].className += ' device-mockup--left fade-out';
            project++;
        }
    }
    else if (project > number){
        while (number < project) {
            projectText[project].className += ' fade-out';
            deviceMockups[project].className += ' device-mockup--right fade-out';
            project--;
        }
    }
    removeClasses(deviceMockups[project], 'fade-out', 'device-mockup--left', 'device-mockup--right');
    setTimeout(() => {
        removeClasses(projectText[project], 'fade-out');
    }, 500)
}

export {changeProject, project};