function length(arr) {

    let x1 = arr[0];
    let y1 = arr[1];

    let x2 = arr[2];
    let y2 = arr[3];

    let x3 = arr[4];
    let y3 = arr[5];

    let distance12 = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    let distance13 = Math.sqrt(((x1 - x3) ** 2) + ((y1 - y3) ** 2));
    let distance23 = Math.sqrt(((x2 - x3) ** 2) + ((y2 - y3) ** 2));


    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

length([5, 1, 1, 1, 5, 4]);