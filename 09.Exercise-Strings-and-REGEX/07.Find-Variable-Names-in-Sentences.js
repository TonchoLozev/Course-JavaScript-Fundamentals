function findNames(str) {
    let regex = /\b_[A-Za-z0-9]+\b/g;
    let matches = str.match(regex);
    let result = [];
    for (let i = 0; i < matches.length; i++) {
        let match = matches[i].substr(1);
        result.push(match);
    }
    console.log(result.join(','));
}

findNames('The _id and _age variables are both integers.');