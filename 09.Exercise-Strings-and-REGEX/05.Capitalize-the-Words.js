function capitalize(str) {

    let split = str.split(' ');
    let result = [];
    let regex = /[A-Za-z]/;
    for (let i = 0; i < split.length; i++) {
        let word = split[i];

        let wordResult = [];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (j === 0) {
                if (char.match(regex) !== null) {
                    wordResult.push(char.toUpperCase());
                }else {
                    wordResult.push(char);
                }
            } else {
                if (char.match(regex) !== null) {
                    wordResult.push(char.toLowerCase());
                }else{
                    wordResult.push(char);
                }
            }

        }
        result.push(wordResult.join(''));
    }
    console.log(result.join(' '));
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');