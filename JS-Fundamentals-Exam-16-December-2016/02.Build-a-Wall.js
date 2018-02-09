function calcConsumingForTheWall(arr) {

    arr = arr.map(ch => Number(ch));

    let cubicUsedPerDay = [];


    while (true) {

        let cubicForDay = 0;
        let isFinished = 0;

        for (let i = 0; i < arr.length; i++) {
            let wall = arr[i];
            if (wall < 30) {
                wall++;
                arr[i] = wall;
                cubicForDay += 195;
            } else {
                isFinished++;
            }

        }
        if (cubicForDay !== 0) {
            cubicUsedPerDay.push(cubicForDay);
        }
        if (isFinished === arr.length) {
            break;
        }
    }
    let totalSum = cubicUsedPerDay.reduce((a, b) => a+b);

    console.log(cubicUsedPerDay.join(', '));
    console.log(`${totalSum*1900} pesos`)
}

calcConsumingForTheWall([17]);