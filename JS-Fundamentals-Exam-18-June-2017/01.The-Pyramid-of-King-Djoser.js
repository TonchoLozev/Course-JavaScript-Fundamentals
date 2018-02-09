function findMaterialsForPyramid(base, increment) {
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisNeeded = 0;
    let goldNeeded = 0;
    let hight = 0;
    let steps = 1;
    for (let i = base; i > 0; i -= 2) {
        base -= 2;
        if (steps !== 5 && i !== 2 && i !== 1) {
            let calcM = (4 * i) - 4;
            marbleNeeded += calcM * increment;
        }
        if (i !== 2 && i !== 1) {
            let calalcS = base * base;
            stoneNeeded += calalcS * increment;
        }

        if (steps === 5 && i !== 2 && i !== 1) {
            let calcL = (4 * i) - 4;
            lapisNeeded += calcL * increment;
            steps = 0;
        }
        if (i === 1 || i === 2) {
            goldNeeded += (i * i) * increment;

        }
        steps++;
        hight += increment;
    }


    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(hight)}`)
}

findMaterialsForPyramid(23, 0.5);