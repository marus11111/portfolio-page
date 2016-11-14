import {containers} from '../helpers/getDOMElements';
import {changeProject, project} from '../navigation/changeProject'; 
import {changePage, page} from '../navigation/changePage';
import {menuOnPage} from '../navigation/hideShowMenu';

let navigateOnKey = true;

const keyDownHandler = (e) => {
    let k = e.keyCode || e.which;
    if (navigateOnKey) {
        if ((k==13 || k==32 || k==40 || k==39) && page<containers.length-1){
            if (menuOnPage){
                return;
            }
            e.preventDefault();
            if (page==3 && project<1){
                changeProject(project+1);
            }
            else {
                changePage(page+1);
            }
        }
        else if ((k == 38 || k==37) && page>0){
            if (menuOnPage) {
                return;
            }
            e.preventDefault();
            if(page==3 && project>0){
                changeProject(project-1);
            }
            else {
                changePage(page-1); 
            }
        }
        
        navigateOnKey = false;
        
        setTimeout(() => {
            navigateOnKey = true;
        }, 500);
    }
    
}

window.addEventListener('keydown', keyDownHandler);
