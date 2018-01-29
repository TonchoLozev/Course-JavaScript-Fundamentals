function censoring(text, arr) {
    for (let i = 0; i < arr.length; i++) {

        let regex = new RegExp(arr[i], 'g');
        text = text.replace(regex, '-'.repeat(arr[i].length));
    }
    console.log(text);
}
censoring('roses are red, violets are blue', [', violets are', 'red']);