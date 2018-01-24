function lastKnumberSeq(n, k) {
    let result = [];
    result.push(1);
    console.log(result[0]);
    for (let i = 1; i < n; i++) {

        let sumArr =0;
        if (result.length < k) {
            sumArr = result.slice(0, result.length).reduce((a, b) => a + b, 0);
        }else{
            sumArr = result.slice(i-k, i).reduce((a, b) => a + b, 0);
        }
        result.push(sumArr);
        console.log(sumArr);
    }
}

lastKnumberSeq(8, 2);