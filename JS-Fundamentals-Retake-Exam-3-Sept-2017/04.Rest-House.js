function calcRooms(rooms, guests) {

    let roomsMap = new Map();
    let guestsAndRooms = new Map();

    for (let i = 0; i < rooms.length; i++) {
        let roomNum = rooms[i].number;
        let roomType = rooms[i].type;
        roomsMap.set(roomNum, roomType);
        guestsAndRooms.set(roomNum, []);
        guestsAndRooms.get(roomNum).push(roomType);
    }

    for (let i = 0; i < guests.length; i++) {

        let firstName = guests[i].first.name;
        let firstAge = guests[i].first.age;
        let firstGander = guests[i].first.gender;

        let secondName = guests[i].second.name;
        let secondAge = guests[i].second.age;
        let secondGander = guests[i].second.gender;

        if (firstGander !== secondGander) {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'double-bedded' && guestsAndRooms.get(room[0]).length === 1) {
                    guestsAndRooms.get(room[0]).push({name: firstName, age: firstAge, gander: firstGander});
                    guestsAndRooms.get(room[0]).push({name: secondName, age: secondAge, gander: secondGander});
                    delete guests[i];
                    break;
                }
            }
        } else {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'triple' && guestsAndRooms.get(room[0]).length === 1) {
                    guestsAndRooms.get(room[0]).push({name: firstName, age: firstAge, gander: firstGander});
                    guestsAndRooms.get(room[0]).push({name: secondName, age: secondAge, gander: secondGander});
                    delete guests[i];
                    break;
                }
            }
        }

    }
    guests = guests.filter(x => x !== undefined);
    for (let i = 0; i < guests.length; i++) {
        let firstName = guests[i].first.name;
        let firstAge = guests[i].first.age;
        let firstGander = guests[i].first.gender;

        let secondName = guests[i].second.name;
        let secondAge = guests[i].second.age;
        let secondGander = guests[i].second.gender;

        if (firstGander === 'male') {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'triple' && guestsAndRooms.get(room[0]).length < 4 && guestsAndRooms.get(room[0])[1].gander === firstGander) {
                    guestsAndRooms.get(room[0]).push({name: firstName, age: firstAge, gander: firstGander});
                    delete guests[i].first;
                    break;
                }
            }
        } else if (firstGander === 'female') {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'triple' && guestsAndRooms.get(room[0]).length < 4 && guestsAndRooms.get(room[0])[1].gander === firstGander) {
                    guestsAndRooms.get(room[0]).push({name: firstName, age: firstAge, gander: firstGander});
                    delete guests[i].first;
                    break;
                }
            }
        }
        if (secondGander === 'male') {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'triple' && guestsAndRooms.get(room[0]).length < 4 && guestsAndRooms.get(room[0])[1].gander === secondGander) {
                    guestsAndRooms.get(room[0]).push({name: secondName, age: secondAge,gander: secondGander});
                    delete guests[i].second;
                    break;
                }
            }
        } else if (secondGander === 'female') {
            for (let j = 0; j < roomsMap.size; j++) {
                let room = Array.from(roomsMap)[j];
                if (room[1] === 'triple' && guestsAndRooms.get(room[0]).length < 4 && guestsAndRooms.get(room[0])[1].gander === secondGander) {
                    guestsAndRooms.get(room[0]).push({name: secondName, age: secondAge, gander: secondGander});
                    delete guests[i].second;
                    break;
                }
            }
        }
    }

    let sortRooms = Array.from(guestsAndRooms.keys()).sort((a, b) => sortAlphaNum(a, b));


    for (let i = 0; i < guestsAndRooms.size; i++) {
        console.log(`Room number: ${sortRooms[i]}`);
        let names = [];
        let sortNames = Array.from(guestsAndRooms.get(sortRooms[i]));
        sortNames.shift();
        sortNames.sort((a, b) => a.name.localeCompare(b.name));
        for (let name of sortNames) {
            console.log(`--Guest Name: ${name.name}`);
            console.log(`--Guest Age: ${name.age}`)
        }
        if (guestsAndRooms.get(sortRooms[i])[0] === 'double-bedded') {
            console.log(`Empty beds in the room: ${3 - guestsAndRooms.get(sortRooms[i]).length}`)
        } else {
            console.log(`Empty beds in the room: ${4 - guestsAndRooms.get(sortRooms[i]).length}`)
        }
    }
    let count = 0;
    for (let i = 0; i < guests.length; i++) {
        let person = guests[i];
        if (person.first !== undefined) {
            count++;
        }
        if (person.second !== undefined) {
            count++;
        }
    }
    console.log(`Guests moved to the tea house: ${count}`);


    function sortAlphaNum(a, b) {
        var reA = /[^a-zA-Z]/g;
        var reN = /[^0-9]/g;
        var AInt = parseInt(a, 10);
        var BInt = parseInt(b, 10);
        if (isNaN(AInt) && isNaN(BInt)) {
            var aA = a.replace(reA, "");
            var bA = b.replace(reA, "");
            if (aA === bA) {
                var aN = parseInt(a.replace(reN, ""), 10);
                var bN = parseInt(b.replace(reN, ""), 10);
                alert("in if " + aN + " : " + bN);
                return aN === bN ? 0 : aN > bN ? 1 : -1;
            } else {
                return aA > bA ? 1 : -1;
            }
        } else if (isNaN(AInt)) {//A is not an Int
            return 1;//to make alphanumeric sort first return 1 here
        } else if (isNaN(BInt)) {//B is not an Int
            return -1;//to make alphanumeric sort first return -1 here
        } else if (AInt == BInt) {
            var aA = a.replace(reA, "");
            var bA = b.replace(reA, "");
            return aA > bA ? 1 : -1;
        }
        else {
            return AInt > BInt ? 1 : -1;
        }
    }

}

calcRooms([{"number": "360", "type": "double-bedded"},
        {"number": "481", "type": "triple"},
        {"number": "668", "type": "double-bedded"},
        {"number": "963", "type": "double-bedded"},
        {"number": "190", "type": "double-bedded"},
        {"number": "248", "type": "triple"},
        {"number": "300", "type": "double-bedded"},
        {"number": "450", "type": "double-bedded"},
        {"number": "115", "type": "triple"},
        {"number": "709", "type": "double-bedded"},
        {"number": "408", "type": "double-bedded"},
        {"number": "961", "type": "double-bedded"},
        {"number": "621", "type": "triple"},
        {"number": "958", "type": "triple"},
        {"number": "690", "type": "triple"},
        {"number": "416", "type": "triple"},
        {"number": "991", "type": "double-bedded"},
        {"number": "195", "type": "triple"},
        {"number": "976", "type": "double-bedded"},
        {"number": "500", "type": "triple"},
        {"number": "901", "type": "double-bedded"},
        {"number": "858", "type": "triple"},
        {"number": "193", "type": "triple"},
        {"number": "313", "type": "triple"},
        {"number": "468", "type": "double-bedded"},
        {"number": "869", "type": "double-bedded"}],
    [{
        "first": {"name": "Valerie French", "gender": "female", "age": 69},
        "second": {"name": "Rodolfo Howard", "gender": "male", "age": 28}
    },
        {
            "first": {"name": "Kelly Manning", "gender": "female", "age": 62},
            "second": {"name": "Micheal Townsend", "gender": "male", "age": 43}
        },
        {
            "first": {"name": "Rochelle Sandoval", "gender": "female", "age": 22},
            "second": {"name": "Dave Smith", "gender": "male", "age": 8}
        },
        {
            "first": {"name": "Dave Smith", "gender": "male", "age": 28},
            "second": {"name": "Javier Ortega", "gender": "male", "age": 69}
        },
        {
            "first": {"name": "Tracey Greer", "gender": "female", "age": 38},
            "second": {"name": "Justin Tran", "gender": "male", "age": 22}
        },
        {
            "first": {"name": "Claudia Haynes", "gender": "female", "age": 29},
            "second": {"name": "Horace Thornton", "gender": "male", "age": 48}
        },
        {
            "first": {"name": "Steven Todd", "gender": "male", "age": 64},
            "second": {"name": "Marshall Cain", "gender": "male", "age": 37}
        },
        {
            "first": {"name": "Milton Fleming", "gender": "male", "age": 20},
            "second": {"name": "Ronnie Floyd", "gender": "male", "age": 41}
        },
        {
            "first": {"name": "Erica Wood", "gender": "female", "age": 9},
            "second": {"name": "Matthew Rodriquez", "gender": "male", "age": 61}
        },
        {
            "first": {"name": "Ora Wilkerson", "gender": "female", "age": 5},
            "second": {"name": "Lynette Pena", "gender": "female", "age": 28}
        },
        {
            "first": {"name": "Raquel Johnson", "gender": "female", "age": 9},
            "second": {"name": "Jim Graham", "gender": "male", "age": 27}
        },
        {
            "first": {"name": "Esther Valdez", "gender": "female", "age": 12},
            "second": {"name": "Levi Boyd", "gender": "male", "age": 19}
        },
        {
            "first": {"name": "Jimmy Jimenez", "gender": "male", "age": 33},
            "second": {"name": "Troy Payne", "gender": "male", "age": 64}
        },
        {
            "first": {"name": "Carol Hansen", "gender": "female", "age": 1},
            "second": {"name": "Velma Chavez", "gender": "female", "age": 29}
        },
        {
            "first": {"name": "Salvatore Carroll", "gender": "male", "age": 26},
            "second": {"name": "Clinton Santiago", "gender": "male", "age": 63}
        },
        {
            "first": {"name": "Katie Fisher", "gender": "female", "age": 69},
            "second": {"name": "Erin Moreno", "gender": "female", "age": 33}
        },
        {
            "first": {"name": "Tyrone Hogan", "gender": "male", "age": 59},
            "second": {"name": "Jim Graham", "gender": "male", "age": 6}
        },
        {
            "first": {"name": "Julian Phelps", "gender": "male", "age": 51},
            "second": {"name": "Micheal Townsend", "gender": "male", "age": 44}
        },
        {
            "first": {"name": "Esther Valdez", "gender": "female", "age": 66},
            "second": {"name": "Jimmy Jimenez", "gender": "male", "age": 69}
        },
        {
            "first": {"name": "Jeanette Steele", "gender": "female", "age": 16},
            "second": {"name": "Sergio Ferguson", "gender": "male", "age": 55}
        },
        {
            "first": {"name": "Alejandro Lane", "gender": "male", "age": 55},
            "second": {"name": "Jesus Terry", "gender": "male", "age": 31}
        },
        {
            "first": {"name": "Lee Rogers", "gender": "female", "age": 62},
            "second": {"name": "Doreen Sullivan", "gender": "female", "age": 24}
        },
        {
            "first": {"name": "Beatrice Fleming", "gender": "female", "age": 28},
            "second": {"name": "Gerard Williams", "gender": "male", "age": 19}
        },
        {
            "first": {"name": "Jody Harris", "gender": "female", "age": 11},
            "second": {"name": "Amos Murray", "gender": "male", "age": 34}
        },
        {
            "first": {"name": "Anne Richardson", "gender": "female", "age": 39},
            "second": {"name": "Darnell Mack", "gender": "male", "age": 44}
        },
        {
            "first": {"name": "Dianne Harrington", "gender": "female", "age": 1},
            "second": {"name": "Sheri Sparks", "gender": "female", "age": 62}
        },
        {
            "first": {"name": "Jamie Chambers", "gender": "female", "age": 6},
            "second": {"name": "Merle Jenkins", "gender": "male", "age": 15}
        },
        {
            "first": {"name": "Connie Swanson", "gender": "female", "age": 23},
            "second": {"name": "Ida Wolfe", "gender": "female", "age": 28}
        },
        {
            "first": {"name": "Esther Valdez", "gender": "female", "age": 58},
            "second": {"name": "Terence Fox", "gender": "male", "age": 46}
        },
        {
            "first": {"name": "Alexis Graham", "gender": "female", "age": 47},
            "second": {"name": "Janis Franklin", "gender": "female", "age": 12}
        },
        {
            "first": {"name": "Armando Cortez", "gender": "male", "age": 62},
            "second": {"name": "Sergio Ferguson", "gender": "male", "age": 67}
        },
        {
            "first": {"name": "Mathew Soto", "gender": "male", "age": 42},
            "second": {"name": "Alejandro Lane", "gender": "male", "age": 30}
        },
        {
            "first": {"name": "Elizabeth Huff", "gender": "female", "age": 40},
            "second": {"name": "Beth Foster", "gender": "female", "age": 65}
        },
        {
            "first": {"name": "Rudy Mason", "gender": "male", "age": 63},
            "second": {"name": "Ellis Parsons", "gender": "male", "age": 67}
        },
        {
            "first": {"name": "Dave Smith", "gender": "male", "age": 16},
            "second": {"name": "Malcolm Bishop", "gender": "male", "age": 44}
        },
        {
            "first": {"name": "Beth Foster", "gender": "female", "age": 63},
            "second": {"name": "Lorene Thompson", "gender": "female", "age": 50}
        },
        {
            "first": {"name": "Rodney Saunders", "gender": "male", "age": 56},
            "second": {"name": "Tracy Reid", "gender": "male", "age": 66}
        },
        {
            "first": {"name": "Lauren Padilla", "gender": "female", "age": 28},
            "second": {"name": "Melody Gill", "gender": "female", "age": 23}
        }],
);

