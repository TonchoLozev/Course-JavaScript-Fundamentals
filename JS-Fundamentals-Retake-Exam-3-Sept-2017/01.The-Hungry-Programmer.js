function functionsWithArray(food, functions) {

    let count = 0;
    for (let i = 0; i < functions.length; i++) {

        let line = functions[i].split(' ');
        let cmd = line[0];

        if (cmd === 'Serve') {
            if (food.length > 0) {
                let mealName = food.pop();
                console.log(`${mealName} served!`)
            }
        } else if (cmd === 'Eat') {
            if (food.length > 0) {
                let mealName = food.shift();
                console.log(`${mealName} eaten`);
                count += 1;
            }
        } else if (cmd === 'Add') {
            if (line.length === 2) {
                if (line[1] !== undefined) {
                    let mealAdd = line[1];
                    food.unshift(mealAdd);
                }
            }
        } else if (cmd === 'Consume') {
            if (line.length === 3) {
                let start = Number(line[1]);
                let end = Number(line[2]);
                if (start < food.length && start >= 0 && end < food.length && !start.isNaN && !end.isNaN) {

                    let countMeals = food.slice(start, end + 1);
                    food.splice(start, countMeals.length);
                    console.log(`Burp!`);
                    count += countMeals.length;
                }
            }

        } else if (cmd === 'Shift') {
            if (line.length === 3) {
                let portion1 = line[1];
                let portion2 = line[2];
                if (!portion1.isNaN && !portion2.isNaN) {
                    if (portion1 < food.length && portion1 >= 0 && portion2 < food.length && portion2 >= 0) {
                        let tempPortion = food[portion2];
                        food[portion2] = food[portion1];
                        food[portion1] = tempPortion;
                    }
                }
            }
        } else if (cmd === 'End') {
            break;
        }
    }
    if (food.length > 0) {
        console.log(`Meals left: ${food.join(', ')}`)
    } else {
        console.log(`The food is gone`)
    }
    console.log(`Meals eaten: ${count}`)

}

functionsWithArray(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]
);