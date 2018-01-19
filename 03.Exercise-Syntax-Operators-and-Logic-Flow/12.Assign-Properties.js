function assignProperties(arr) {

    let firstvalue = arr[0];
    let secondValue = arr[2];
    let thirdValue = arr[4];

    let obj  = {};
    obj[firstvalue] = arr[1];
    obj[secondValue] = arr[3];
    obj[thirdValue] = arr[5];

    console.log(obj);

}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);