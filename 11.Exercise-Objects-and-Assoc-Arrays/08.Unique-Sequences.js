function compareArrays(arr) {
    let arrays = new Map();
    for (let i = 0; i < arr.length; i++) {
        let array = JSON.parse(arr[i]).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if(!arrays.has(toStore)){
            arrays.set(toStore, array.length);
        }
    }
    let sortedArrays = Array.from(arrays.keys()).sort((a, b) => arrays.get(a) - arrays.get(b));
    for(let ar of sortedArrays){
        console.log(ar);
    }

}

compareArrays([ '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]' ]);