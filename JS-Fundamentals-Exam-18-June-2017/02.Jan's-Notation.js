function calculations(arr) {
    let numbers = [];
    let toPrintOtNotTpPrint = true;
    for (let i = 0; i < arr.length; i++) {
        let ch = arr[i];
        if (!isNaN(ch)) {
            numbers.push(Number(ch));
        } else {
            if (ch === '+') {
                if (numbers.length > 1) {
                    let num1 = numbers.pop();
                    let num2 = numbers.pop();
                    let sum = num2 + num1;
                    numbers.push(sum);
                } else {
                    console.log(`Error: not enough operands!`);
                    toPrintOtNotTpPrint = false;
                    break;
                }
            } else if (ch === '-') {
                if (numbers.length > 1) {
                    let num1 = numbers.pop();
                    let num2 = numbers.pop();
                    let sum = num2 - num1;
                    numbers.push(sum);
                } else {
                    console.log(`Error: not enough operands!`);
                    toPrintOtNotTpPrint = false;
                    break;
                }

            } else if (ch === '*') {
                if (numbers.length > 1) {
                    let num1 = numbers.pop();
                    let num2 = numbers.pop();
                    let sum = num2 * num1;
                    numbers.push(sum);
                } else {
                    console.log(`Error: not enough operands!`);
                    toPrintOtNotTpPrint = false;
                    break;
                }

            } else if (ch === '/') {
                if (numbers.length > 1) {
                    let num1 = numbers.pop();
                    let num2 = numbers.pop();
                    let sum = num2 / num1;
                    numbers.push(sum);
                } else {
                    console.log(`Error: not enough operands!`);
                    toPrintOtNotTpPrint = false;
                    break;
                }

            }
        }
    }
    if(toPrintOtNotTpPrint === true){
        if(numbers.length > 1){
            console.log('Error: too many operands!')
        }else{
            console.log(numbers[0]);
        }
    }

}

calculations([15,
    '/']


);