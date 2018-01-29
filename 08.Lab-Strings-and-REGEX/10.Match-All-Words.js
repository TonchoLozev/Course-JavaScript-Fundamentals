function matchAllWords(text) {
    let matches = text.match(/[A-Za-z0-9_]+/g);
    console.log(matches.join('|'));

}
matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');