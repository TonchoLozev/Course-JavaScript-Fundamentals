function carModels(arr) {
    let carBrands = new Map();
    for (let i = 0; i < arr.length; i++) {

        let carTokens = arr[i].split('|').map(ch => ch.trim());

        let brand = carTokens[0];
        let model = carTokens[1];
        let quantity = Number(carTokens[2]);

        if(!carBrands.has(brand)){
            carBrands.set(brand, new Map());
            carBrands.get(brand).set(model, quantity);
        }else{
            if(!carBrands.get(brand).has(model)){
                carBrands.get(brand).set(model, quantity);
            }else{
                let currentQuantity = carBrands.get(brand).get(model)+quantity;
                carBrands.get(brand).set(model,currentQuantity);
            }
        }
    }
    for(let [key, value] of carBrands){
        console.log(key);
        for(let [model, quantity] of value){
            console.log(`###${model} -> ${quantity}`);
        }

    }
}

carModels([ 'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200' ]);