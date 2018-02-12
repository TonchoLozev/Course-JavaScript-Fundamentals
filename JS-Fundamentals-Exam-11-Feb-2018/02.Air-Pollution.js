function pollutedBlocks(matrixInput, commandsInput) {
    let matrix = [];
    let polutedThatReachedFifty = [];

    for (let element of matrixInput) {                    // creating the encoded message into matrix
        matrix.push(element.split(' ').map(ch => Number(ch)));
    }
    for (let i = 0; i < commandsInput.length; i++) {

        for(let row = 0; row< matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++) {
                let number = `${row}${col}`;
                if (matrix[row][col] >= 50 && !polutedThatReachedFifty.includes(number)) {
                    polutedThatReachedFifty.push(number);
                }
            }
        }

        let cmdTokens = commandsInput[i].split(' ');
        let cmd = cmdTokens[0];
        let value = Number(cmdTokens[1]);


        if (cmd === 'breeze') {
            for (let row = 0; row < 1; row++) {
                for (let col = 0; col < matrix[value].length; col++) {
                    let number = `${value}${col}`;
                    if(polutedThatReachedFifty.includes(Number) && matrix[value][col] - 15 < 0){
                        matrix[value][col] = 0;
                    }else{
                        matrix[value][col] -= 15;
                    }

                }
            }
        } else if (cmd === 'gale') {
            for (let row = 0; row < matrix.length; row++) {
                let number = `${row}${value}`;
                if(polutedThatReachedFifty.includes(Number) && matrix[row][value] - 20 < 0){
                    matrix[row][value] = 0;
                }else{
                    matrix[row][value] -= 20;
                }

            }
        }else if (cmd === 'smog'){
            for(let row = 0; row< matrix.length; row++){
                for(let col = 0; col < matrix[row].length; col++){
                    matrix[row][col]+=value;
                }
            }
        }
    }
    let polutedBlocks = [];
    for(let row = 0; row< matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col]>=50){
                polutedBlocks.push(`[${row}-${col}]`)
            }
        }
    }
    if(polutedBlocks.length === 0){
        console.log(`No polluted areas`)
    }else{

        console.log(`Polluted areas: ${polutedBlocks.join(', ')}`)
        ////for (let i = 0; i < polutedBlocks.length; i++) {
        //    let pololoutedTokens = polutedBlocks[i].split('-');
        //    let row = pololoutedTokens[0];
        //    let col = pololoutedTokens[1];
        //    console.log(`Polluted areas: []`)
        //}
    }

}