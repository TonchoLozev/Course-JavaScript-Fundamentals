function firstAndLast(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k));
    console.log(arr.slice(arr.length - k, arr.length));
}
firstAndLast([2, 7, 8, 9]);