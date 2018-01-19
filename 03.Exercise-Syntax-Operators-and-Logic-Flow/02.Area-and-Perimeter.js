function calcAreaAndPerimeter(sideA, sideB) {
    "use strict";

    let perimeter = (sideA * 2) + (sideB * 2);
    let area = sideB * sideA;

    console.log(area);
    console.log(perimeter)
}

calcAreaAndPerimeter(2, 2);