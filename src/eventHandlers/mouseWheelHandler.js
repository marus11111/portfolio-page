import {containers} from '../helpers/getDOMElements';
import {changeProject, project} from '../navigation/changeProject'; 
import {changePage, page} from '../navigation/changePage';
import {menuOnPage} from '../navigation/hideShowMenu';

let scroll = true;

const mouseWheelHandler = (e) => {
    if (menuOnPage){
        return;
    }
    e.preventDefault();
    if(scroll){
        if (e.deltaY>0 && page<containers.length-1){
            if (page==2 && project<2){
                changeProject(project+1);
            }
            else {
                changePage(page+1);
            }
        }
        else if (e.deltaY<0 && page>0){
            if(page==2 && project>0){
                changeProject(project-1);
            }
            else {
                changePage(page-1); 
            }   
        }
        
        scroll = false;
        
        setTimeout(() => {
            scroll = true;
        }, 1000);
    } 
}

window.addEventListener('wheel', mouseWheelHandler);