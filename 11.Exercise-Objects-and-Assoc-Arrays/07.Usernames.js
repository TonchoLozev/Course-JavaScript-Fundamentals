function usernamesCatalog(arr) {

    let names = new Set();
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        names.add(name);
    }
    let sortedNames = Array.from(names).sort((a, b) => sort(a, b));

    function sort(a, b) {
        if(a.length !== b.length){
            return a.length - b.length;
        }else{
            return a.localeCompare(b);
        }
    }

    console.log(sortedNames.join('\r\n'));
}

usernamesCatalog(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);