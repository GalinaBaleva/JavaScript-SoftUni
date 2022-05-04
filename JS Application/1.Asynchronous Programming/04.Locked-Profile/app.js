async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const main = document.getElementById('main');
    let result = await fetch(url);
    if (result.status != 200) {
        throw new Error(`Error`);
    }
    let result2 = await result.json();
    Object.entries(result2).forEach(el => createProfil.call(el[1], main))

}

function createProfil(main) {
    console.log(this, main)

    const divProfile = el('div', {}, 'profile',
        el('img', { 'src': './iconProfile2.png' }, 'userIcon', undefined),
        el('lable', {}, undefined, 'Lock'),
        // el('input', { 'type': 'radio', 'name': 'user1Locked', 'value': 'lock' }, undefined, undefined),
        // el('lable', {}, undefined, 'Unlock'),
        // el('input', { 'type': 'radio', name: 'user1Locked', 'value': 'unlock' }, undefined, undefined),
        // el('hr', {}, undefined, undefined),
        // el('lable', {}, undefined, 'Username'),
        // el('input', { type: 'text', name: 'user1Username', 'value': `${this.name}`, '': 'disabled readonly' }),
        // el('div', {}, 'hiddenInfo',
        //     el('hr', {}, undefined, undefined),
        //     el('lable', {}, undefined, 'Email:'),
        //     el('input', { type: 'email', name: 'user1Email', 'value': `${this.email}`, '': 'disable readonly' }),
        //     el('lable', {}, undefined, 'Age'),
        // el('input', { type: 'email', name: 'user1Age', 'value': `${this.age}`, '': 'disable readonly' }, undefined),
        //     ),
        el('button', {}, undefined, 'Show more')
    );
    console.log(divProfile)
    main.appendChild(divProfile);

}
function el(tagName, atr, classType, ...text) {
    let tag = document.createElement(tagName);
    tag.cassList = classType;

    for (let attribut of atr) {
        tag[attribut] = atr[attribut];
    };

    for (let word of text) {
        if (typeof word == 'string' || typeof word === 'number') {
            word = document.createTextNode(word);
            tag.appendChild(word);
        };
    };
    return tag;

}