function sortArr(arr) {
    arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).sort((a, b) => a.length > b.length);
    console.log(arr.join('\r\n'));
}

sortArr(['test',
    'Deny',
    'omen',
    'Default',]);