let parallaxElements = [];    
for (let i=0; i<4; i++){
    parallaxElements.push(document.getElementsByClassName('parallax')[i]);
}
    
let shadows = [];
for (let i=0; i<4; i++){
    shadows.push(document.getElementsByClassName('shadow')[i]);
}
    
export {parallaxElements, shadows};
    

