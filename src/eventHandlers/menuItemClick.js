import {changePage} from '../navigation/changePage';
import {changeProject} from '../navigation/changeProject';
import {menuItems} from '../helpers/getDOMElements';

menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener('click', (e)=>{
        
        //Prevent hyperlinks from firing
        e.preventDefault();
        
        //Change project to first or last one depending on where user navigates
        if (i<=3) {
            changeProject(0);
        }
        else if (i==4) {
            changeProject(1);
        }
        
        //Change page to the one user clicked in the menu
        changePage(i);
    });
});