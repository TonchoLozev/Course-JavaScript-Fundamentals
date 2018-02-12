function bitCoinMiner(arr) {

    let totalLeva = 0;
    let days = 1;
    let allDays = 1;
    let boughtCoins = 0;
    let daysOfFirstPurchase = 0;
    for (let i = 0; i < arr.length; i++) {
        let goldInGrams = Number(arr[i]);
        if (days === 3) {
            let percent = (goldInGrams * 30) / 100;
            goldInGrams -= percent;
            days = 0;
        }

        let sumLeva = goldInGrams * 67.51;
        totalLeva += sumLeva;
        if (totalLeva >= 11949.16) {
            while(true){
                if(totalLeva < 11949.16){
                    break;
                }
                totalLeva -= 11949.16;
                boughtCoins++;
            }
            if (daysOfFirstPurchase === 0) {
                daysOfFirstPurchase = allDays;
            }
        }
        days++;
        allDays++;
    }
    console.log(`Bought bitcoins: ${boughtCoins}`);
    if (daysOfFirstPurchase > 0) {
        console.log(`Day of the first purchased bitcoin: ${daysOfFirstPurchase}`);
    }
    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`);
}