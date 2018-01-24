function isOverTheLimit(arr) {

    let speed = Number(arr[0]);
    let zone = arr[1];

    let limit = getLimitPerZone(zone);
    let infraction = getOutput(speed, limit);

    if(infraction){
        console.log(infraction);
    }

    function getOutput(speed, limit) {

        let overSpeed = speed - limit;

        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed <= 20) {
                return 'speeding';
            } else if (overSpeed > 20 && overSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }
    }

    function getLimitPerZone(zones) {

        switch (zones) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'residential':
                return 20;
            case 'city':
                return 50;
        }
    }
}

isOverTheLimit([21, 'residential']);