function juiceBottles(arr) {

    let juiceBottles = {};
    let juiceCache = {};

    for (let i = 0; i < arr.length; i++) {

        let juiceTokens = arr[i].split(' => ');

        let fruit = juiceTokens[0];
        let quantity = Number(juiceTokens[1]);
        if (isNaN(juiceCache[fruit])) {
            juiceCache[fruit] = 0;
        }
        juiceCache[fruit] += quantity;
        if (juiceCache[fruit] >= 1000) {
            if (!juiceBottles.hasOwnProperty(fruit)) {
                juiceBottles[fruit] = 0;
                juiceBottles[fruit] = Math.floor(juiceCache[fruit] / 1000);
                juiceCache[fruit] = juiceCache[fruit] % 1000;
            } else {

                juiceBottles[fruit] += Math.floor(juiceCache[fruit]/1000);
                juiceCache[fruit] = juiceCache[fruit] % 1000;
            }
        }
    }

    for (let key in juiceBottles) {
        console.log(`${key} => ${juiceBottles[key]}`)
    }
}

juiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);