function planesGraphic(arr) {

    let landedPlanes = [];
    let townsArrDep = new Map();
    let townsPlanes = new Map();
    let townsArrivals = new Map();

    for (let i = 0; i < arr.length; i++) {
        let input = arr[i];
        let planeTokens = input.split(' ');

        let planeId = planeTokens[0];
        let town = planeTokens[1];
        let passengersCount = Number(planeTokens[2]);
        let action = planeTokens[3];

        if (action === 'land') {
            if (!landedPlanes.includes(planeId)) {
                if (!townsArrDep.has(town)) {
                    townsArrDep.set(town, [{arrivals: passengersCount}, {departures: 0}]);
                    townsArrivals.set(town, passengersCount);
                } else {
                    townsArrDep.get(town)[0].arrivals += passengersCount;
                    townsArrivals.set(town, townsArrivals.get(town) + passengersCount);
                }
                if (!townsPlanes.has(town)) {
                    townsPlanes.set(town, []);
                    townsPlanes.get(town).push(planeId);
                } else {
                    if (!townsPlanes.get(town).includes(planeId)) {
                        townsPlanes.get(town).push(planeId);
                    }
                }
                landedPlanes.push(planeId)
            }
        } else if (action === 'depart') {
            if (landedPlanes.includes(planeId)) {
                if (!townsArrDep.has(town)) {
                    townsArrDep.set(town, [{arrivals: 0}, {departures: passengersCount}]);
                    townsArrivals.set(town, 0);
                } else {
                    townsArrDep.get(town)[1].departures += passengersCount;
                    townsArrivals.set(town, townsArrivals.get(town));
                }
                let index = landedPlanes.indexOf(planeId);
                landedPlanes.splice(index, 1);

                if (!townsPlanes.has(town)) {
                    townsPlanes.set(town, []);
                    townsPlanes.get(town).push(planeId);
                } else {
                    if (!townsPlanes.get(town).includes(planeId)) {
                        townsPlanes.get(town).push(planeId);
                    }
                }
            }
        }
    }
    let sortLandedPlanes = landedPlanes.sort((a, b) => a.localeCompare(b));
    console.log('Planes left:');
    for (let i = 0; i < sortLandedPlanes.length; i++) {
        console.log(`- ${sortLandedPlanes[i]}`);
    }

    let sortTown = Array.from(townsArrivals).sort(function (a, b) {
        if (b[1] - a[1] !== 0) {
            return b[1] - a[1];
        }else{
            return a[0].localeCompare(b[0]);
        }
    });

    for (let [town, arriva]  of sortTown) {
        console.log(town);
        console.log(`Arrivals: ${townsArrDep.get(town)[0].arrivals}`);
        console.log(`Departures: ${townsArrDep.get(town)[1].departures}`);
        let sortPlanes = townsPlanes.get(town).sort((a, b) => a.localeCompare(b));
        console.log(`Planes:`);
        for (let i = 0; i < sortPlanes.length; i++) {
            console.log(`-- ${sortPlanes[i]}`)
        }
    }


}

planesGraphic([  "Boeing474 Madrid 300 land",  "AirForceOne WashingtonDC 178 land",  "Airbus London 265 depart",  "ATR72 WashingtonDC 272 land",  "ATR72 Madrid 135 depart" ]);