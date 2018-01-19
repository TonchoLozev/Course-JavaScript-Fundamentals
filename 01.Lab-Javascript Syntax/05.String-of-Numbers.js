function stringOfNumbers(number) {

    let num = Number(number);
    let string = "";

    for (let i = 1; i <= num; i++) {
        string = string + i;
    }

    console.log(string);
}

stringOfNumbers('11');