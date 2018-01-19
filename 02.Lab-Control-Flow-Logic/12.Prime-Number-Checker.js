function isPrime(num) {
    "use strict";
    let prime = true;
    if (num < 2) {
        prime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime === true) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isPrime(1);