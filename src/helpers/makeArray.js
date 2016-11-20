
//Little helper to make arrays from DOM element collections
const makeArray = (arrayLike) => {
    return Array.prototype.slice.call(arrayLike);
}

export {makeArray};