//Little helper to remove classes from given element
export default (element, ...classes) => {
  classes.forEach((classToRemove) => {
    let regex = new RegExp(`\\s?${classToRemove}`, 'g');
    element.className = element.className.replace(regex, '');
  });
}
