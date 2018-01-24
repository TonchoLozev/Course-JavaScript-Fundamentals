function validityChecker(arr) {

    let x1 = arr[0];
    let y1 = arr[1];

    let x2 = arr[2];
    let y2 = arr[3];

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstPointToZero(x1, y1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondPointToZer(x2, y2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstPointToSecondPoint(x1, y1, x2, y2)}`);

    function firstPointToZero(x1, y1) {
        let formula = Math.sqrt(((x1 - 0) ** 2) + ((y1 - 0) ** 2));
        if (formula % 1 === 0) {
            return 'valid';
        }
        return 'invalid';
    }

    function secondPointToZer(x2, y2) {
        let formula = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
        if (formula % 1 === 0) {
            return 'valid';
        }
        return 'invalid';
    }

    function firstPointToSecondPoint(x1, y1, x2, y2) {
        let formula = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
        if (formula % 1 === 0) {
            return 'valid';
        }
        return 'invalid';
    }
}

validityChecker([2, 1, 1, 1]);