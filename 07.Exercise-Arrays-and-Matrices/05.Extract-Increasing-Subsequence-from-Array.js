function extractSubsequence(arr) {
    let resultArr = [];
    resultArr.push(Number(arr[0]));

    for(let i = 1; i < arr.length; i++){
        if(Number(arr[i])>resultArr[resultArr.length-1]){
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join('\r\n'));
}

extractSubsequence(['20', '3', '2', '15', '6', '1']);