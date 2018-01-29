function spiralMatrix(rows, cols) {

    let matrix = [];
    //creating the matrix
    for (let r = 0; r < rows; r++) {
        matrix.push([]);
        for(let c = 0; c < cols; c++){
            matrix[r].push(0);
        }
    }

    fillMatrix(matrix, 0, 0, 1);
    function fillMatrix(matrix, currentRow, currentCol, counter) {

        if (matrix[currentRow][currentCol] !== 0) {
            return matrix
        }

        // fill Top Row rightwards
        for (let col = currentCol; col < rows - currentRow; col++) {
            matrix[currentRow][col] = counter++
        }

        //fill Right side
        for(let row = currentRow + 1; row < matrix.length - currentRow; row ++){
            matrix[row][rows - 1 - currentRow] = counter++;
        }

        //fill the bot
        for(let col = cols - currentCol - 2; col > currentCol; col--){
            matrix[rows - currentRow - 1][col] = counter++;
        }
        //fill the left side
        for(let row = matrix.length - currentRow - 1; row > currentRow; row-- ){
            matrix[row][currentCol] = counter++;
        }

        fillMatrix(matrix, ++currentRow, ++currentCol, counter)
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

spiralMatrix(5, 5);