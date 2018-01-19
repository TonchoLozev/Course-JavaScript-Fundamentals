function calculator(num1, num2, operator) {

    let result = 0;

    switch (operator) {
        case '+':
            result = num2 + num1;
            break;
        case '-':
            if (num1 < 0 || num2 < 0) {
                result = Math.abs(num2) + Math.abs(num1);
            } else {
                result = num2 - num1;
            }
            break;
        case '/':
            result = num1 / num2;
            break;
        case'*':
            result = num2 * num1;
            break;
    }
    console.log(result);
}

calculator(2, 4, '*');