
//Little helper to remove multiple classes from multiple elements
//elements argument must be an array
const removeClasses = (elements, ...classes) => {
    elements.forEach((element) => {
        classes.forEach((classToRemove) => {
            let regex = new RegExp(` ${classToRemove}`, 'g');
            element.className = element.className.replace(regex, '');
        });
    })
}

export {removeClasses};