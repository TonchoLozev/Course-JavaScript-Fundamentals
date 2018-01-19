function binaryToDec(binary) {

    let binaryStr = '' + binary.toString();
    let digit = parseInt(binaryStr, 2);
    console.log(digit);
}

binaryToDec(11110000);