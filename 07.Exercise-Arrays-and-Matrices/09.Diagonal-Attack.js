function diagonalSum(arr) {
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split(' ');
        matrix.push(str);
    }

    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;

    let leftCounter = 0;
    let rightCounter = matrix[0].length - 1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (col === leftCounter) {
                leftDiagonalSum += Number(matrix[row][col]);
            }
            if (col === rightCounter) {
                rightDiagonalSum += Number(matrix[row][col]);
            }
        }
        leftCounter++;
        rightCounter--;
    }

    leftCounter = 0;
    rightCounter = matrix[0].length - 1;

    if (rightDiagonalSum === leftDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col !== leftCounter && col !== rightCounter) {
                    matrix[row][col] = rightDiagonalSum;
                }
            }
            leftCounter++;
            rightCounter--;
        }
        console.log(matrix.map(row => row.join(' ')).join('\r\n'));
    }
}

diagonalSum(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);