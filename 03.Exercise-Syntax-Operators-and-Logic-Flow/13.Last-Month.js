function calcLastDay(arr){
    "use strict";
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    let date = new Date(year, month-1, day+1);
    let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0);

    console.log(lastDayOfMonth.getDate());
}

calcLastDay([17, 3, 2002]);