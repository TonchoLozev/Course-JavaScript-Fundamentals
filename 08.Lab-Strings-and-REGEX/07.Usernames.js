function generateUsernames(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let name = '';
        let split = arr[i].split('@');

        let user = split[0];
        let domain = split[1];

        name = user + '.';

        let splitDomain = domain.split('.')
        for (let i = 0; i < splitDomain.length; i++) {
            let letters = splitDomain[i];
            name +=letters[0];
        }

        result.push(name);
    }
    console.log(result.join(', '));
    
}
generateUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);