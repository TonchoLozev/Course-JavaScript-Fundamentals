function orbitMatrix(arr) {

    let width = Number(arr[0]);
    let hight = Number(arr[1]);
    let x = Number(arr[2]);
    let y = Number(arr[3]);

    let matrix = [];

    for (let row = 0; row < hight; row++) {
        matrix.push([]);
        for (let col = 0; col < width; col++) {
            matrix[row].push(0);
        }
    }

    matrix[x][y] = 1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] !== 1) {
                matrix[row][col] = Math.floor(Math.sqrt(((x - row) ** 2) + ((y - col) ** 2)) + 1);
            }
            if (matrix[row][col] > matrix.length) {
                matrix[row][col] = matrix.length;
            }

        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\r\n'));
}

orbitMatrix([3, 3, 2, 2]);