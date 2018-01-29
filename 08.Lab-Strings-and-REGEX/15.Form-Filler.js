function filtering(username, email, phonenumber, data) {

    let usernameRegex = /<![A-Za-z]*!>/;
    let emailRegex = /<@[A-Za-z]*@>/;
    let phoneRegex = /<\+[A-Za-z]*\+>/;

    for (let i = 0; i < data.length; i++) {
        let str = data[i];
        let matchName = usernameRegex.exec(str);
        let matchEmail = emailRegex.exec(str);
        let matchPhone = phoneRegex.exec(str);
        if(matchName){
            str = str.replace(usernameRegex, username);
            data[i] = str;
        }
        if(matchEmail){
            str = str.replace(emailRegex, email);
            data[i] = str;
        }
        if(matchPhone){
            str = str.replace(phoneRegex, phonenumber);
            data[i] = str;
        }
    }
    console.log(data.join('\r\n'));
}

filtering('Pesho', 'pesho@softuni.bg', '90-60-90',
    ['Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);