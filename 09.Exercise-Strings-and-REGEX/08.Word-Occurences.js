function wordOcc(str, word) {
    let regex = new RegExp( "\\b(" + word + ")\\b", 'gi');
    let matches = str.match(regex);

    let count = 0;
    if(regex.exec(str)) {
        count = matches.length;
    }

    console.log(count);
}
wordOcc('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
   'there');