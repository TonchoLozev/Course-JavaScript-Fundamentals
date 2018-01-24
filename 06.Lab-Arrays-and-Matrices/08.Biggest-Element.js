function biggestElementInMatrix(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] > biggest) {
                biggest = arr[row][col];
            }
        }
    }

    console.log(biggest)
}

biggestElementInMatrix([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);