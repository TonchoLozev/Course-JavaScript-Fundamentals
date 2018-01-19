function nextDay(year, month, day) {

    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() + 1);

    let y = myDate.getFullYear();
    let m = myDate.getMonth() + 1;
    let d = myDate.getDate();

    console.log(`${y}-${m}-${d}`)
}

nextDay(2016, 9, 30);