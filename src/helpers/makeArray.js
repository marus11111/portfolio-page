const makeArray = (arrayLike) => {
    return Array.prototype.slice.call(arrayLike);
}

export {makeArray};