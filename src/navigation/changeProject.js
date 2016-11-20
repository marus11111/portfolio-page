import {deviceMockups, projectText} from '../helpers/getDOMElements';

//Store the number of project currently being shown on the 'projects' page
let project = 0;

//Change project to the one given as function's argument
const changeProject = (number) => {
    if (number > project){
        while (number > project){
            projectText[project].style.opacity = 0;
            deviceMockups[project].style.left = '-200%';
            deviceMockups[project].style.opacity = 0;
            project++;
        }
    }
    else if (project > number){
        while (number < project) {
            projectText[project].style.opacity = 0;
            deviceMockups[project].style.left = '200%';
            deviceMockups[project].style.opacity = 0;
            project--;
        }
    }
    deviceMockups[project].style.left = '50%';
    deviceMockups[project].style.opacity = 1;
    setTimeout(() => {
        projectText[project].style.opacity = 1;
    }, 500)
}

export {changeProject, project};