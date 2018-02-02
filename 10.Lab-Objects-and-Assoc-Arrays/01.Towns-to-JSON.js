function townsToJson(arr) {
    let values = arr[0].split(/\s*\|\s*/).filter(c => c !== '');
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let split = arr[i].split(/\s*\|\s*/).filter(c => c !== '');
        let obj = {};

        for (let j = 0; j < values.length; j++) {
            if (isNaN(split[j])) {
                obj[values[j]] = split[j];

            } else {
                obj[values[j]] = Number(split[j]);
            }
        }
        result.push(obj);
    }


    console.log(`${JSON.stringify(result)}`);
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.69 | 23.32 |',
    '| Beijing | 39.91 | 116.36 |']
);