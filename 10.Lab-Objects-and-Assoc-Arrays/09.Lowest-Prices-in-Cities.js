function lowestPriceOfAll(arr) {

    let productsPrizeTowns = new Map();
    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' | ');

        let city = tokens[0];
        let product = tokens[1];
        let prize = Number(tokens[2]);

        if (!productsPrizeTowns.has(product)) {
            productsPrizeTowns.set(product, new Map());
            productsPrizeTowns.get(product).set(prize, city);
        } else {
            if (Array.from(productsPrizeTowns.get(product))[0][1] === city) {
                productsPrizeTowns.get(product).set(prize, city);
            }
            if (Array.from(productsPrizeTowns.get(product))[0][0] > prize) {

                productsPrizeTowns.delete(product);

                productsPrizeTowns.set(product, new Map());
                productsPrizeTowns.get(product).set(prize, city);
            }
        }
    }

    for(let [key, value] of productsPrizeTowns){
        let array = Array.from(productsPrizeTowns.get(key));
        console.log(`${key} -> ${array[0][0]} (${array[0][1]})`)

    }
}

lowestPriceOfAll([
   'Sofia City | BMW | 100000',
   'Sofia City | Mitsubishi | 10000',
   'Sofia City | Mercedes | 10000',
   'Sofia City | NoOffenseToCarLovers | 0',
   'Mexico City | Audi | 1000',
   'Mexico City | BMW | 99999',
   'New York City | Mitsubishi | 10000',
   'New York City | Mitsubishi | 1000',
   'Mexico City | Audi | 100000',
   'Washington City | Mercedes | 1000']);