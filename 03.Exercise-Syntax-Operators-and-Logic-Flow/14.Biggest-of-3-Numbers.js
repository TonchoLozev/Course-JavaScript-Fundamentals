function findBiggestNum (arr){
    "use strict";
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);

    let biggest = Math.max(num1,num2,num3);

    console.log(biggest);
}

findBiggestNum([130, 90, 180]);