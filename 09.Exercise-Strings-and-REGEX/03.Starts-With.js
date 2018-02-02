function checkStart(str, substr) {
    let substrOfStr = str.substr(0, substr.length);
    if(substrOfStr === substr){
        console.log('true');
    }else{
        console.log('false');
    }
}
checkStart('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');