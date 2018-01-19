function composeTags(arr) {

    let locatin = arr[0];
    let text = arr[1];

    console.log(`<img src="${locatin}" alt="${text}">`);
}

composeTags(['smiley.gif', 'Smiley Face']);