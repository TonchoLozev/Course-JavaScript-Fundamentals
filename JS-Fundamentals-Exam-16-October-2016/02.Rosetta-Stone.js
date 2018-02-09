function decodeMsg(arr) {

    let encodedMsg = arr.slice(1, Number(arr[0]) + 1); //getting the encoded message
    let encodedMatrix = [];
    for (let element of encodedMsg) {                    // creating the encoded message into matrix
        encodedMatrix.push(element.split(' '));
    }

    let msgToDecode = arr.splice(Number(arr[0]) + 1);  //getting the message which we will decode
    let matrixToDecode = [];
    for (let element of msgToDecode) {                    // creating the msg which we will decode into matrix
        matrixToDecode.push(element.split(' '));
    }

    let msgInNumbers = [];

    let encodedMatrixRow = 0;                           //rows and cols which we will get from our encodade msg
    let encodedMatrixCol = 0;
    for (let row = 0; row < matrixToDecode.length; row++) {
        encodedMatrixCol = 0;
        if (encodedMatrixRow >= encodedMatrix.length) {
            encodedMatrixRow = 0;
        }
        for (let col = 0; col < matrixToDecode[row].length; col++) {
            if (encodedMatrixCol >= encodedMatrix[0].length) {
                encodedMatrixCol = 0;
            }
            msgInNumbers.push(Number(matrixToDecode[row][col]) + Number(encodedMatrix[encodedMatrixRow][encodedMatrixCol]));
            encodedMatrixCol++;
        }
        encodedMatrixRow++;
    }

    let text = '';
    for (let i = 0; i < msgInNumbers.length; i++) {
        let number = msgInNumbers[i];
        if (number > 27) {
            while (true) {
                if (number <= 27) {
                    break;
                }
                number -= 27;
            }
        }
        let char = String.fromCharCode(64 + number);
        if (char === '[') {
            char = ' ';
        }
        text += char

    }
    console.log(text)
}

decodeMsg([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);

