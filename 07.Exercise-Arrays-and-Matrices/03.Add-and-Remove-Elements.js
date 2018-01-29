function agregatingArray(arr) {
    let array = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        let cmd = arr[i];
        if (cmd === 'add') {
            array.push(count);
            count++;
        } else {
            array.pop();
            count++;
        }
    }
    if (array.length === 0) {
        console.log('Empty');
    } else {
        console.log(array.join('\r\n'));
    }

}

agregatingArray(['add', 'add', 'remove', 'add', 'add']);