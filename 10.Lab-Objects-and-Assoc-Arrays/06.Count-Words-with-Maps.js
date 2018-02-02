function countWordWithMAp(arr) {
    let text = arr[0];

    let textTokens = text.split(/[^A-Za-z0-9_]/)
        .filter(ch => ch !== '')
        .map(ch => String(ch).toLowerCase())
        .sort();

    let words = new Map();

    for (let i = 0; i < textTokens.length; i++) {
        let word = textTokens[i];
        if(!words.has(word)){
            words.set(word, 1);
        }else{
            words.set(word, words.get(word)+1)
        }
    }
    for(let [word, count] of words){
        console.log(`'${word}' -> ${count} times`)
    }
}

countWordWithMAp(["Far too slow, you're far too slow."]);