function figure(n) {

    let lines = '';
    for (let i = 0; i < 2; i++) {
        lines += '+';
        for (let j = 0; j <= n - 3; j++) {
            lines += '-';
        }
    }
    lines += '+';
    console.log(lines);

    if (n % 2 === 0) {

        for (let i = 0; i < (n - 4) / 2; i++) {
            let midde = '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }
            midde += '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }

            console.log(midde + '|');
        }
    } else {

        for (let i = 0; i < (n - 3) / 2; i++) {
            let midde = '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }
            midde += '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }

            console.log(midde + '|');
        }
    }


    lines = '';
    for (let i = 0; i < 2; i++) {
        lines += '+';
        for (let j = 0; j <= n - 3; j++) {
            lines += '-';
        }
    }
    lines += '+';
    console.log(lines);

    if (n % 2 === 0) {

        for (let i = 0; i < (n - 4) / 2; i++) {
            let midde = '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }
            midde += '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }

            console.log(midde + '|');
        }
    } else {

        for (let i = 0; i < (n - 3) / 2; i++) {
            let midde = '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }
            midde += '|';
            for (let j = 0; j <= n - 3; j++) {
                midde += ' ';
            }
            midde += '|';
            console.log(midde);
        }
    }

    lines = '';
    for (let i = 0; i < 2; i++) {
        lines += '+';
        for (let j = 0; j <= n - 3; j++) {
            lines += '-';
        }
    }
    lines += '+';
    console.log(lines);

}

figure(6);