function cookingNumbers(arr) {
    let number = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let operation = arr[i];

        switch (operation) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
        }
    }

    function chop(num) {
        return num / 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return num + 1;
    }

    function bake(num) {
        return num * 3;
    }

    function fillet(num) {
        let twentyPercent = (num * 20) / 100;
        return num - twentyPorcents;
    }
}

cookingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);