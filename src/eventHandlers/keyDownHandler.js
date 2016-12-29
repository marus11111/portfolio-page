import {containers} from '../helpers/getDOMElements';
import {changeProject, project} from '../navigation/changeProject'; 
import {changePage, page} from '../navigation/changePage';
import {fullMenuOnPage} from '../navigation/hideShowMenu';

let navigateOnKey = true;

const keyDownHandler = (e) => {
    let k = e.keyCode || e.which;
    if (navigateOnKey) {
        if ((k===13 || k===32 || k===40 || k===39) && page<containers.length-1){
            
            //Don't change page if menu is open
            if (fullMenuOnPage){
                return;
            }
            
            //Prevent default scrolling
            e.preventDefault();
            
            //Determine whether to change project or page
            if (page===3 && project<1){
                changeProject(project+1);
            }
            else {
                changePage(page+1);
            }
        }
        else if ((k===38 || k===37) && page>0){
            if (fullMenuOnPage) {
                return;
            }
            e.preventDefault();
            if(page===3 && project>0){
                changeProject(project-1);
            }
            else {
                changePage(page-1); 
            }
        }
        
        //Turn key navigation off when page transitions
        navigateOnKey = false;
        
        setTimeout(() => {
            navigateOnKey = true;
        }, 500);
    }
    
}

window.addEventListener('keydown', keyDownHandler);
