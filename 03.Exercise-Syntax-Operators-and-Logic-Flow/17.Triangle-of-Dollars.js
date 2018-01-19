function triangleOfDollars(n) {

    for (let row = 1; row <= n; row++) {


        let line = '';
        for(let i = 1; i<=row; i++){
            line+='$';
        }
        console.log(line);
    }
}

triangleOfDollars(3);