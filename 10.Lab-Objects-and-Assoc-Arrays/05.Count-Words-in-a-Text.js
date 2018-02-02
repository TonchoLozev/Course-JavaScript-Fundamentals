function countWordsWithObj(arr) {
    let text = arr[0];
    let textTokens = text.split(/[^A-Za-z0-9_]/).filter(ch => ch !== '');
    let assocObj = {};
    for (let i = 0; i < textTokens.length; i++) {
        let word = textTokens[i];
        if(!assocObj.hasOwnProperty(word)){
            assocObj[word] = 1;
        }else{
            assocObj[word] += 1;
        }

    }
    console.log(JSON.stringify(assocObj));
}
countWordsWithObj(["Far too slow, you're far too slow."])