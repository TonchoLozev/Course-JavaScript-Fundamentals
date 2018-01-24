function diagonalMaticSum(matrix) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(col === row){
                firstDiagonal+=matrix[row][col];
            }
            if(col === matrix.length - row - 1){
                secondDiagonal += matrix[row][col];
            }
        }
    }
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalMaticSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);