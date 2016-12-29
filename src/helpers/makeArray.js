//Little helper to make arrays from DOM element collections
export default (arrayLike) => {
    return Array.prototype.slice.call(arrayLike);
}