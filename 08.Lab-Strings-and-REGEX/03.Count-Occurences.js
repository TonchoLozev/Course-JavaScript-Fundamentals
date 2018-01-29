function countOccurrence(str, text) {

    let count = 0;

    while (true) {
        let startindex = text.indexOf(str);

        if (startindex < 0) {
            break;
        }

        count++;
        text = text.substr(startindex + 1);
    }
    console.log(count);
}

countOccurrence('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');