function rotateArr(arr) {

    let rotations = Number(arr.splice(arr.length - 1, 1));

    for (let i = 0; i < rotations % arr.length; i++) {
        let firstElement = arr[0];              //We take our two elements who will be rotated
        let lastElement = arr[arr.length-1];

        arr.pop();                              // We remove our two elements who will be rotated

        arr.unshift(lastElement);               ////We rotated our two elements
    }
    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4', '2']);