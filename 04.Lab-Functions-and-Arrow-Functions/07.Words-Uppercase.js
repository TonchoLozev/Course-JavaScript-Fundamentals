function wordUpper(input) {

    console.log(String(input).toUpperCase().split(/\W+/).filter(x => x !== '').join(', '));
}

wordUpper('Hi, how are you?');