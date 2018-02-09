function filterMostImportant(arr) {
    arr = arr.filter(x => x !== '');
    let personSubscribers = new Map();
    let personSubscriptions = new Map();

    for (let i = 0; i < arr.length; i++) {

        let input = arr[i];

        if (input.length === 1) {

            let person = input;

            if (!personSubscribers.has(person)) {
                personSubscribers.set(person, []);
            }
            if (!personSubscriptions.has(person)) {
                personSubscriptions.set(person, []);
            }
        } else {

            let tokens = input.split('-');
            let firstPerson = tokens[0];
            let secondPerson = tokens[1];

            if (personSubscribers.has(firstPerson) && personSubscribers.has(secondPerson) && firstPerson !== secondPerson) {
                if(!personSubscribers.get(secondPerson).includes(firstPerson)) {
                    personSubscribers.get(secondPerson).push(firstPerson);
                }
                if(!personSubscriptions.get(firstPerson).includes(secondPerson)){
                    personSubscriptions.get(firstPerson).push(secondPerson);
                }
            }
        }
    }
    let sort = Array.from(personSubscribers.keys()).sort((a, b) => sortPeople(a, b));
    console.log(sort[0]);
    for (let i = 0; i < personSubscribers.get(sort[0]).length; i++) {
        console.log(`${i+1}. ${personSubscribers.get(sort[0])[i]}`)
    }

    function sortPeople(a, b) {

        if(personSubscribers.get(a).length !== personSubscribers.get(b).length){
            return personSubscribers.get(b).length - personSubscribers.get(a).length;
        }else {
            if(personSubscriptions.get(a).length !== personSubscriptions.get(b).length){
                return personSubscriptions.get(b).length - personSubscriptions.get(a).length;
            }
        }
    }
}

filterMostImportant([ 'J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J', '' ]);