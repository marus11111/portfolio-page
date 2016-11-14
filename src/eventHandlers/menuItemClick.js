import {changePage} from '../navigation/changePage';
import {changeProject} from '../navigation/changeProject';
import {menuItems} from '../helpers/getDOMElements';

menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener('click', (e)=>{
        e.preventDefault();
        if (i<=3) {
            changeProject(0);
        }
        else if (i==4) {
            changeProject(1);
        }
        changePage(i);
    });
});