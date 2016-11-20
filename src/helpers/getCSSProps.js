
//Define object with css properties that require support check
let propsToCheck = {
    clipPath:'polygon(30% 30%, 90% 30%, 90% 60%, 30% 60%)', 
    transformOrigin: '10% 10%',
    transform: 'perspective(1000px) translate3D(20px, 30px, 40px)',
    filter: 'blur(5px)'    
}

const checkBrowserSupport = (options) => {
    
    //Create object that at the end will contain properties supported by browser 
    let CSSProperties = {};
    
    //Create DOM element for the purpose of testing css properties support
    let testElement = document.createElement('testElement');
    document.body.appendChild(testElement);
    testElement = document.getElementsByTagName('testElement')[0];
    
    for (let property in options){
        
        //Only iterate on argument object's own properties 
        if(!options.hasOwnProperty(property)){ continue; }
        
        //Create array of possible supported properties (not including the old Opera -o- prefix)
        let vendorProperty = `${property[0].toUpperCase()}${property.slice(1)}`;
        let properties = [property, `Webkit${vendorProperty}`, `ms${vendorProperty}`, `Moz${vendorProperty}`];
        
        //For each js camelCase property we need css kebab-case version for the purpose of regex testing
        let regexProperty = property.replace(/[A-Z]/g, function(match){return `-${match.toLowerCase()}`;});
        
        //Create RegExp object from variable
        let regex = new RegExp(regexProperty);
        
        //Run loop over array of possible properties and return when a working one is found
        let workingProperty = (()=>{
            for (let i=0; i<properties.length; i++){
                testElement.style[properties[i]] = options[property];
                if (regex.test(testElement.getAttribute('style'))){
                    return properties[i];     
                }
            }
        })();
        
        //If there was a working property, save it in object that was created at the beginning
        if(workingProperty){
            CSSProperties[property] = workingProperty;
        }
    }
    
    //After testing all properties remove the test element from DOM and 
    //return object with working properties
    document.body.removeChild(testElement);
    return CSSProperties;  
}

let CSSProps = checkBrowserSupport(propsToCheck);

//Check whether clipPath is supported, if not, check clip; 
//save the working property under 'clipProp' key so that we have 
//one key that we can refer to regardless of whether we're using clipPath or clip property
if (CSSProps.clipPath){
    CSSProps.clipProp = CSSProps.clipPath;
    delete CSSProps.clipPath;
}
else {
    let clip = checkBrowserSupport({clip:'rect(10px, 10px, 10px, 10px)'});
    CSSProps.clipProp = clip.clip;
}

export default CSSProps;
