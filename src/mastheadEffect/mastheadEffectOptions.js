//Options for clipping and transforming mastead background

const optionsTransform = [
    [90, 100, 100], //speedX, speedY (mouseMove modifiers), translateZ
    [40, 40, 90],
    [70, 70, 90],
    [30, 55, 80]
]

const optionsClip = [
    [0, 0, 30, 50], //top, right, bottom, left
    [0, 40, 45, 0],
    [50, 30, 10, 40],
    [30, 52, 0, 0]        
]

export {optionsTransform, optionsClip};