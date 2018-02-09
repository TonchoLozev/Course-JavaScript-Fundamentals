function productOfNextSNums(arr) {
    let biggestProduct = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {

        let currentNum = Number(arr[i]);
        if (currentNum > 0 && currentNum < 10) {
            let currentProduct = 0;
            for (let j = 1; j <= currentNum; j++) {
                if (j === 1) {
                    currentProduct = Number(arr[i + j])
                } else {
                    currentProduct *= Number(arr[i + j]);
                }
            }
            if(currentProduct > biggestProduct){
                biggestProduct = currentProduct;
            }
        }
    }
    console.log(biggestProduct);

}

productOfNextSNums(['10', '20', '2', '30', '44', '3', '56', '20', '24']);