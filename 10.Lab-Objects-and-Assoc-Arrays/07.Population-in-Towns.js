function countPopulation(arr) {

    let towns = new Map();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' <-> ');

        let city = tokens[0];
        let population = Number(tokens[1]);

        if (!towns.has(city)){
            towns.set(city, Number(population));
        }else{
            towns.set(city, towns.get(city)+population);
        }
    }
    for(let [city, population] of towns){
        console.log(`${city} : ${population}`)
    }
}

countPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
]);