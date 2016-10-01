const checkBrowserSupport = (property, exampleValue) => {
    
    let testElement = document.createElement('testElement');
    document.body.appendChild(testElement);
    testElement = document.getElementsByTagName('testElement')[0];
    
    let camelProperty = property.replace(/-\w/g, (match) => {return match.slice(1).toUpperCase();});
    let vendorProperty = `${camelProperty[0].toUpperCase()}${camelProperty.slice(1)}`;
    
    let properties = [camelProperty, `Webkit${vendorProperty}`, `ms${vendorProperty}`, `Moz${vendorProperty}`];
    
    for (let i=0; i<properties.length; i++){
        testElement.style[properties[i]] = exampleValue;
        if (testElement.getAttribute('style')){
            document.body.removeChild(testElement);
            return properties[i];     
        }
    }
}

const clipPropTemporary = checkBrowserSupport('clip-path', 'polygon(30% 30%, 90% 30%, 90% 60%, 30% 60%)');
const clipProp = clipPropTemporary ? clipPropTemporary : checkBrowserSupport('clip', 'rect(10px, 10px, 10px, 10px)');
const transitionProp = checkBrowserSupport('transition', 'transform 3s linear');
const transformOriginProp = checkBrowserSupport('transform-origin', '10% 10%');
const transformProp = checkBrowserSupport('transform', 'scale(1.1)');

export {clipProp, transitionProp, transformOriginProp, transformProp}; 
