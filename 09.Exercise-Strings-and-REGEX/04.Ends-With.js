function checkStart(str, substr) {
    let substrOfStr = str.substr(str.length - substr.length);
    if(substrOfStr === substr){
        console.log('true');
    }else{
        console.log('false');
    }
}
checkStart('The new iPhone has no headphones jack.', 'o headphones jack.');