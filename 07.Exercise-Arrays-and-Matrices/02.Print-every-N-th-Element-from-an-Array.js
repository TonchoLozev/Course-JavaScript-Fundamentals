function printNthElement(arr) {
    let last = Number(arr.splice(arr.length - 1, 1));
    for(let i = 0; i < arr.length; i+=last){
        console.log(arr[i]);
    }

}
printNthElement(['5', '20', '31', '4', '20', '2']);