function encodeSpecialKeys(arr) {
    let specialKey = arr.shift();
    let specialKeyChars = "";
    for(let char of specialKey){
        specialKeyChars += `[${char.toUpperCase()}${char.toLowerCase()}]`;
    }
    let msgPattern = new RegExp('(?<= |^)(' + specialKeyChars + ')(\\s+[A-Z!%$#]{8,})(?= |\\.|,|$)', 'g');
    let wordPattern = /^[A-Z!%$#]{8,}$/;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];
        let msgMatch = msgPattern.exec(line);
        while (msgMatch) {
            let words = msgMatch[2].trim();
            let wordMatch = wordPattern.exec(words);
            if (wordMatch !== null) {
                let decodedMsg = words
                    .toLowerCase()
                    .replace(/!/g,1)
                    .replace(/%/g,2)
                    .replace(/#/g,3)
                    .replace(/\$/g,4);
                line = line.replace(words, decodedMsg);
            }


            msgMatch = msgPattern.exec(line);
        }
        result.push(line);
    }
    console.log(result.join('\r\n'));

    function decode(c) {
        switch (c) {
            case '!':
                return '1';
            case '%':
                return '2';
            case '#':
                return '3';
            case '$':
                return '4';
            default:
                return c.toLowerCase();
        }
    }
}

encodeSpecialKeys(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);