function cityIncome(arr) {

    let townsIncome = new Map();
    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' -> ');

        let city = tokens[0];
        let product = tokens[1];
        let sum = tokens[2].split(' : ').reduce((a, b) => a * b);

        if (!townsIncome.has(city)) {
            townsIncome.set(city, new Map())
        }
        if (!townsIncome.get(city).has(product)) {
            townsIncome.get(city).set(product, sum);
        } else {
            townsIncome.get(city).get(product) + sum;
        }
    }

    for (let [city, incomes] of townsIncome) {
        console.log(`Town - ${city}`);
        for (let [product, prize] of incomes) {
            console.log(`$$$${product} : ${prize}`)
        }
    }
}

cityIncome([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',]);