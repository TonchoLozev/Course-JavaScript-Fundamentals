function filterByAge(minimumAge, firstName, firstAge, secondName, secondAge) {

    let firstPerson = {};
    firstPerson.name = firstName;
    firstPerson.age = firstAge;

    let secondPerson = {};
    secondPerson.name = secondName;
    secondPerson.age = secondAge;

    if (firstPerson.age >= minimumAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age >= minimumAge) {
        console.log(secondPerson);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);