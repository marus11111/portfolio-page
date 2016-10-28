let propsToCheck = {
    clipPath:'polygon(30% 30%, 90% 30%, 90% 60%, 30% 60%)', 
    transformOrigin: '10% 10%',
    transform: 'scale(1.1) translate(20px, 30px)',//'perspective(1000px) translate3D(20px, 30px, 40px)',  - transform3D explanation in clipFunction.js
    filter: 'blur(5px)'    
}

const checkBrowserSupport = (options) => {
    
    let CSSProperties = {};
    let testElement = document.createElement('testElement');
    document.body.appendChild(testElement);
    testElement = document.getElementsByTagName('testElement')[0];
    
    for (let property in options){
        if(!options.hasOwnProperty(property)){ continue; }
        let vendorProperty = `${property[0].toUpperCase()}${property.slice(1)}`;
        let properties = [property, `Webkit${vendorProperty}`, `ms${vendorProperty}`, `Moz${vendorProperty}`];
        let regexProperty = property.replace(/[A-Z]/g, function(match){return `-${match.toLowerCase()}`;});
        
        let regex = new RegExp(regexProperty);
        
        let workingProperty = (()=>{
            for (let i=0; i<properties.length; i++){
                testElement.style[properties[i]] = options[property];
                if (regex.test(testElement.getAttribute('style'))){
                    return properties[i];     
                }
            }
        })();
        
        if(workingProperty){
            CSSProperties[property] = workingProperty;
        }
    }
    
    document.body.removeChild(testElement);
    return CSSProperties;  
}

let CSSProps = checkBrowserSupport(propsToCheck);


if (CSSProps.clipPath){
    CSSProps.clipProp = CSSProps.clipPath;
    delete CSSProps.clipPath;
}
else {
    let clip = checkBrowserSupport({clip:'rect(10px, 10px, 10px, 10px)'});
    CSSProps.clipProp = clip.clip;
}

export default CSSProps;
