const removeClass = (element, classToBeRemoved) => {
    let regex = new RegExp(` ${classToBeRemoved}`, 'g');
    element.className = element.className.replace(regex, '');
}

export {removeClass};