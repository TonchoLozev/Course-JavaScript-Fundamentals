function average(number) {

    while (true) {
        if (averageValue(number) > 5) {
            break;
        }
        let numToStru = number + '';
        numToStru+='9';
        number = Number(numToStru);

    }

    console.log(number);

    function averageValue(num) {
        let numToStr = num + '';
        numToStr = numToStr.split('');
        let sum = 0;
        for (let i = 0; i < numToStr.length; i++) {
            sum += Number(numToStr[i]);
        }
        let average = sum / numToStr.length;
        return average;
    }
}

average(5835);