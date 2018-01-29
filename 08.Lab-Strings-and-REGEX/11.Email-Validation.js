function isValid(email) {
    let isValid = new RegExp(/[A-Za-z0-9]+@[a-z]+\.[a-z]+/);
    if(isValid.test(email)){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}
isValid('valid@email.bg');