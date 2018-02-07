function heroesAndTheirItems(arr) {
    "use strict";
    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        let currentHeroTokens = arr[i].split('/').map(ch => ch.trim());

        let currentHeroName = currentHeroTokens[0];
        let currentHeroLevel = Number(currentHeroTokens[1]);
        let currenHeroItems = [];
        if (currentHeroTokens.length > 2) {
            currenHeroItems = currentHeroTokens[2].split(',').map(ch => ch.trim());
        }
        let heroObj = {name: currentHeroName, level: currentHeroLevel, items: currenHeroItems};

        heroes.push(heroObj);
    }
    console.log(JSON.stringify(heroes));
}

heroesAndTheirItems(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);