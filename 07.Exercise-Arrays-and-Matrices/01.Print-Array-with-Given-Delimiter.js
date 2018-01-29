function printArrayWithDelimiter(arr) {
    let last = arr.splice(arr.length - 1, 1);
    console.log(arr.join(last));
}
printArrayWithDelimiter(['One', 'Two', 'Three', '-']);
