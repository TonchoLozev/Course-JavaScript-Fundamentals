function sumByTowns(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i += 2) {
        let town = arr[i];
        let price = Number(arr[i + 1]);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = price;
        } else {
            towns[town] += price;
        }
    }
    console.log(JSON.stringify(towns));
}

sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);