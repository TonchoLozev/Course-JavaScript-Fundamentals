function calcCompoundInterest(arr) {

    let principalSum = Number(arr[0]);
    let interestRate = Number(arr[1]);
    let periodMonths = Number(arr[2]);
    let totalTimeSpan = Number(arr[3]);

    let calcualtion = principalSum * Math.pow(1 + interestRate/(100*( 12/periodMonths)), 12/periodMonths * totalTimeSpan);

    console.log(calcualtion);
}

calcCompoundInterest([1500, 4.3, 3, 6]);