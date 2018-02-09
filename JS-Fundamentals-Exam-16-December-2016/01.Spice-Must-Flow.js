function calDaysAndAmount(startingAmount) {
    let daysCount = 0;
    let consuming = 0;
    let result = 0;
    while(true){
        if(startingAmount<100){
            break;
        }
        consuming= startingAmount-26;
        result+=consuming;
        startingAmount-=10;
        daysCount++;
    }
    if(result>26){
        result-=26;
    }
    console.log(daysCount);
    console.log(result);
}

calDaysAndAmount(450);