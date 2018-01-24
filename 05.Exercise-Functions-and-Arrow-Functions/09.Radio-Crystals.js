function radioCrystal(arr) {

    let finishedCrystal = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let currentCrystal = arr[i];
        let count = 0;

        console.log(`Processing chunk ${arr[i]} microns`);

        while (true) {
            if (currentCrystal === finishedCrystal) {
                break;
            }

            if (currentCrystal / 4 >= finishedCrystal) {
                while (true) {
                    if (currentCrystal / 4 < finishedCrystal) {
                        console.log(`Cut x${count}`);
                        count = 0;
                        console.log('Transporting and washing');
                        currentCrystal = Math.floor(currentCrystal);
                        break;
                    }
                    currentCrystal = cut(currentCrystal);
                    count++;
                }
            }
            if (currentCrystal * 0.8 >= finishedCrystal) {
                while (true) {
                    if (currentCrystal * 0.8 < finishedCrystal) {
                        console.log(`Lap x${count}`);
                        count = 0;
                        console.log('Transporting and washing');
                        currentCrystal = Math.floor(currentCrystal);
                        break;
                    }

                    currentCrystal = lap(currentCrystal);
                    count++;
                }
            }
            if (currentCrystal - 20 >= finishedCrystal) {
                while (true) {
                    if (currentCrystal - 20 < finishedCrystal) {
                        console.log(`Grind x${count}`);
                        count = 0;
                        console.log('Transporting and washing');
                        currentCrystal = Math.floor(currentCrystal);
                        break;
                    }

                    currentCrystal = grind(currentCrystal);
                    count++;
                }
            }
            if (currentCrystal - 2 >= finishedCrystal) {
                while (true) {
                    if (currentCrystal - 2 < finishedCrystal) {
                        if (currentCrystal === finishedCrystal + 1) {
                            currentCrystal = etch(currentCrystal);
                            count++;
                        }
                        console.log(`Etch x${count}`);
                        count = 0;
                        console.log('Transporting and washing');
                        currentCrystal = Math.floor(currentCrystal);
                        break;
                    }

                    currentCrystal = etch(currentCrystal);
                    count++;
                }
            }
            if (currentCrystal === finishedCrystal - 1) {
                currentCrystal = xRay(currentCrystal);
                console.log(`X-ray x1`);
            }

        }
        console.log(`Finished crystal ${currentCrystal} microns`);
    }

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal * 0.8;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function xRay(crystal) {
        return crystal += 1;
    }

}

radioCrystal([1000, 4000, 8100]);