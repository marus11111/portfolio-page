//Options for clipping and transforming mastead background

const optionsTransform = [
    [90, 100, 1.1], //speedX, speedY (mouseMove modifiers), scale
    [40, 40, 1.08],
    [70, 70, 1.08],
    [30, 55, 1.05]
]

const optionsClip = [
    [0, 0, 30, 50], //top, right, bottom, left
    [0, 40, 45, 0],
    [50, 30, 10, 40],
    [30, 52, 0, 0]
]

export {
  optionsTransform,
  optionsClip
};
