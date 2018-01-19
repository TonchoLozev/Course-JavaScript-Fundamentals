function isPalindomre(input) {

    let reverse = String(input).split('').reverse().join('');

    if (reverse === input) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isPalindomre('abba');