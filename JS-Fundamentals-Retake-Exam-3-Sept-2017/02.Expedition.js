function matrixIsTheBEst(matrix, secondMatrix, overlay, starting) {
    "use strict";

    let primaryMatrix = [];
    let secondaryMatrix = [];
    let overlayCoordinates = [];
    let startingPosition = starting;

    //we are creating the matrices the hard way
    for (let row = 0; row < matrix.length; row++) {
        primaryMatrix.push([]);
        for (let col = 0; col < matrix[row].length; col++) {
            primaryMatrix[row].push(matrix[row][col])
        }
    }
    for (let row = 0; row < secondMatrix.length; row++) {
        secondaryMatrix.push([]);
        for (let col = 0; col < secondMatrix[row].length; col++) {
            secondaryMatrix[row].push(secondMatrix[row][col])
        }
    }
    for (let row = 0; row < overlay.length; row++) {
        overlayCoordinates.push([]);
        for (let col = 0; col < overlay[row].length; col++) {
            overlayCoordinates[row].push(overlay[row][col])
        }
    }

    //we are creating our final matrix/ or editing our primaryMatirx

    for (let i = 0; i < overlayCoordinates.length; i++) {
        let rowCordinate = Number(overlayCoordinates[i][0]);
        let colCordinate = Number(overlayCoordinates[i][1]);

        let countRow = 0;
        let countCol = 0;
        for (let row = rowCordinate; row < secondaryMatrix.length + rowCordinate; row++) {
            if (row < primaryMatrix.length) {
                for (let col = colCordinate; col < colCordinate + secondaryMatrix.length; col++) {
                    if (col < primaryMatrix[row].length) {
                        let num1 = primaryMatrix[row][col];
                        let num2 = secondaryMatrix[countRow][countCol];
                        let sum = num1 + num2;
                        if (sum === 2) {
                            primaryMatrix[row][col] = 0;
                        } else if (sum === 1) {
                            primaryMatrix[row][col] = 1;
                        } else if (sum === 0) {
                            primaryMatrix[row][col] = 0;
                        }
                    } else {
                        break;
                    }
                    countCol++;
                }
            } else {
                break;
            }
            countCol = 0;
            countRow++;
        }

    }

    let currentRow = Number(startingPosition[0]);
    let currentCol = Number(startingPosition[1]);
    let previousDirection = '';
    let counter = 1;
    while (true) {
        //down
        if (currentRow + 1 < primaryMatrix.length && primaryMatrix[currentRow + 1][currentCol] === 0 && previousDirection !== 'up') {
            currentRow++;
            previousDirection = 'down';
            counter++
        }
        //up
        else if (currentRow - 1 >= 0 && primaryMatrix[currentRow - 1][currentCol] === 0 && previousDirection !== 'down') {
            currentRow--;
            previousDirection = 'up';
            counter++;
        }
        //right
        else if (currentCol + 1 < primaryMatrix[0].length && primaryMatrix[currentRow][currentCol + 1] === 0 && previousDirection !== 'left') {
            currentCol++;
            previousDirection = 'right';
            counter++;
        }
        //left
        else if (currentCol - 1 >= 0 && primaryMatrix[currentRow][currentCol - 1] === 0 && previousDirection !== 'right') {
            currentCol--;
            previousDirection = 'left';
            counter++
        }
        else {
            break;
        }

    }
    console.log(counter);
    let endRow = currentRow;
    let endCol = currentCol;
    if (endCol === 0) {
        console.log('Left')
    } else if (endCol === primaryMatrix[0].length - 1) {
        console.log('Right')
    } else if (endRow === 0) {
        console.log('Top')
    } else if (endRow === primaryMatrix.length - 1) {
        console.log('Bottom')
    } else if (endRow < primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
        console.log(`Dead end 1`);
    } else if (endRow < primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
        console.log('Dead end 2');
    } else if (endRow >= primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
        console.log('Dead end 3');
    } else if (endRow >= primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
        console.log('Dead end 4');
    }

}

matrixIsTheBEst([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
        [[0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1]],
        [[0, 0],
            [2, 1],
            [1, 0]],
        [2, 0]

);