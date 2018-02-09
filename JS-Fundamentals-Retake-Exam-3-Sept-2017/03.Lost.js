function findLostHuman(keyWord, text) {
    let coordinatesReg = /(north|east)[^\d]*(\d{2})[^,]*[^\d]*(\d{6})/gi;
    let matches = coordinatesReg.exec(text);
    let north = '';
    let east = '';
    while (matches) {

        let coordinates = matches[1].toLowerCase();
        if (coordinates === 'north') {
            north += matches[2] + '.' + matches[3] + ' ' + 'N';
        } else if (coordinates === 'east') {
            east = matches[2] + '.' + matches[3] + ' ' + 'E';
        }

        matches = coordinatesReg.exec(text);
    }
    let msgReg = new RegExp('('+keyWord +').+\\1', 'g');
    let matchMsg = msgReg.exec(text);
    text = matchMsg[0];
    for (let i = 0; i < 2; i++) {
        text = text.replace(keyWord, '');
    }

    console.log(north);
    console.log(east);
    console.log(`Message: ${text}`)
}

findLostHuman('<>',
    'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b');