function aggregateTable(arr) {
    let sum = 0;
    let cities = [];

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split('|').filter(x => x !== '');
        let city = split[0].trim();
        let sumnCity = Number(split[1].trim());

        cities.push(city);
        sum += sumnCity;
    }
    console.log(cities.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);