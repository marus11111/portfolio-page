let parallaxElements = document.getElementsByClassName('parallax');    
let shadows = document.getElementsByClassName('shadow');
let containers = document.getElementsByClassName('container');
let headerMenu = [];
for (let i=0; i<3; i++){
    headerMenu.push(document.getElementsByTagName('li')[i]);
}
    
export {parallaxElements, shadows, containers, headerMenu};
    

