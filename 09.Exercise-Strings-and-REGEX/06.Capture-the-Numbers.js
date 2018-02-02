function catchNumbers(arr) {
    let regex = /\d+/g;
    let text = arr.join(' ');
    let match = text.match(regex);
    console.log(match.join(' '));
}

catchNumbers(['123a456', '789b987', '654c321', '0']);