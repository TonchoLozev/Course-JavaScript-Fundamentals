function calculateBinary(numbers) {
    "use strict";
    for (let i = 0; i < numbers.length; i++) {
        console.log(Math.log2(numbers[i]));
    }
}

calculateBinary([1024, 1048576, 256, 1, 2, 50, 100]);