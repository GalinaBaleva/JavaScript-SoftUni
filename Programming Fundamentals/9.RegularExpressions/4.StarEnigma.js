function starEnigma(input) {
    let countOfMessadges = input.shift();
    let newInfo = [];
    for (let i = 0; i < countOfMessadges; i++) {
        let splited = input[i].split('');
        let counter = 0;
        splited.forEach(el => {
            el = el.toLocaleLowerCase()
            if (el === 's' | el === 't' | el === 'a' | el === 'r') {
                counter++;
            }
        });
        let newMessage = [];
        for (let j = 0; j < splited.length; j++) {
            let currentLetter = splited[j].charCodeAt();
            currentLetter = currentLetter - counter;
            let newChar = String.fromCharCode(currentLetter);
            newMessage.push(newChar);

        }
        newMessage = newMessage.join('');
        newInfo.push(newMessage);
    }
    let attacked = [];
    let destroyed = [];

    let pattern = /([^@\-\!:>]*)?@(?<name>[A-Za-z]+)([^@\-\!:>]*)?(:\d+)\!(?<type>[A|D])\!([^@\-\!:>]*)?->(\d+)([^@\-\!:>]*)?/;

    for (let i = 0; i < newInfo.length; i++) {
        let current = pattern.exec(newInfo[i]);

        if (current != null) {
            current = current.groups;
            if (current.type === 'A') {
                attacked.push(current.name);
            } else if (current.type == 'D') {
                destroyed.push(current.name);
            }

        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    attacked = attacked.sort();
    attacked.forEach(el => console.log(`-> ${el}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed = destroyed.sort();
    destroyed.forEach(el => console.log(`-> ${el}`));
}
starEnigma(["2",
    "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma(["3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);
    