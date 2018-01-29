function isMatrixMagic(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        let colNum = 0;
        let rowNum = 0;
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row === rowNum){
                    rowSum += matrix[row][col];
                }
                if(colNum === col){
                    colSum += matrix[row][col];
                }
            }
        }
        if(colSum !== rowSum){
            return false;
        }
        colNum++;
        rowNum++;
    }
    return true;
}

console.log(isMatrixMagic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));