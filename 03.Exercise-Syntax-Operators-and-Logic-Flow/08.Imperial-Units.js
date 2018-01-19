function inchesToFeet(inches) {

    let foot = 0;
    let inch = 0;

    for (i = 1; i <= inches; i++) {
        if (inch == 12) {
            foot++;
            inch = 0;
        }
        inch++;
    }
    if (inch == 12) {
        foot++;
        inch = 0;
    }
    console.log(`${foot}'-${inch}"`);
}

inchesToFeet(36);