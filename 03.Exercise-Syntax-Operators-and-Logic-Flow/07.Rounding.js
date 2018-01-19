function rounding(arr) {
    "use strict";
    let number = Number(arr[0]);

    let precision = Number(arr[1]);
    if (precision > 15) {
        precision = 15;
    }

    let stringed = '' + number;
    if (stringed.length - 2 > precision) {

        let rounded = Number(number).toFixed(precision);
        console.log(`${rounded}`);
    } else {
        console.log(`${number}`)
    }

}

rounding([3.1415926535897932384626433832795, 2]);