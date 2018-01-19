function dayOfWeek(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 0; i < arr.length; i++) {
        if (day === arr[i]) {
            console.log(i+1);
            return;
        }
    }
    console.log('error')
}
dayOfWeek('sadsad');