function splitWithGivenDelimiter(text, delimiter) {
    let split = text.split(delimiter);
    console.log(split.join('\r\n'));
}

splitWithGivenDelimiter('One-Two-Three-Four-Five', '-');