function extractText(text) {
    let result = [];

    while (true) {
        let startIndex = text.indexOf('(');
        let endIndex = text.indexOf(')');
        if (startIndex < 0) {
            break;
        }
        if (endIndex < 0 || endIndex < startIndex) {
            break;
        }
        let extracting = text.substring(startIndex+1, endIndex);
        result.push(extracting);
        text = text.substr(endIndex + 1);
    }
    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');