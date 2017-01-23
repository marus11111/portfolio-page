import {
  containers
} from '../helpers/getDOMElements';
import {
  changeProject,
  project
} from '../navigation/changeProject';
import {
  changePage,
  page
} from '../navigation/changePage';
import {
  fullMenuOnPage
} from '../navigation/hideShowMenu';

let scroll = true;

const mouseWheelHandler = (e) => {

  //Don't change pages if menu is open
  if (fullMenuOnPage) {
    return;
  }

  //Prevent default scrolling
  e.preventDefault();

  if (scroll) {

    //Determine direction of scroll and whether to change page or project
    if (e.deltaY > 0 && page < containers.length - 1) {
      if (page === 3 && project < 1) {
        changeProject(project + 1);
      } else {
        changePage(page + 1);
      }
    } else if (e.deltaY < 0 && page > 0) {
      if (page === 3 && project > 0) {
        changeProject(project - 1);
      } else {
        changePage(page - 1);
      }
    }

    //Turn scroll off while page transitions 
    //1s debounce also prevents changing multiple sites while long-scrolling on touchpad  
    scroll = false;

    setTimeout(() => {
      scroll = true;
    }, 1000);
  }
}

window.addEventListener('wheel', mouseWheelHandler);
