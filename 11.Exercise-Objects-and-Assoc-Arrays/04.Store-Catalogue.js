function sortCatalogueByKey(arr) {
    let obj = {};
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' : ');

        let product = tokens[0];
        let price = Number(tokens[1]);


        obj[product] = 0;
        obj[product] = price;

        array.push(obj);
    }
    let arrayKeys = Object.keys(obj).sort();
    let ch = arrayKeys[0][0];
    console.log(ch);
    for(let product of arrayKeys){
        let char = String(product);
        if(char[0] !== ch){
            ch = char[0];
            console.log(char[0]);
        }
        console.log(`  ${product}: ${obj[product]}`);

    }

}
sortCatalogueByKey(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);