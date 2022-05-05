async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const main = document.getElementById('main');
    let result = await fetch(url);
    if (result.status != 200) {
        throw new Error(`Error`);
    }
    let result2 = await result.json();
    Object.entries(result2).forEach(el => createProfil(el))

}

function createProfil(info) {
    const main = document.getElementById('main');
    const divProfile = document.createElement('div');
    divProfile.classList = 'profile';

    const imgPhoto = document.createElement('img');
    imgPhoto.setAttribute('src', './iconProfile2.png');
    imgPhoto.classList = 'userIcon';
    divProfile.appendChild(imgPhoto);

    const lableLock = document.createElement('lable');
    lableLock.textContent = 'Lock';
    divProfile.appendChild(lableLock);

    const inputRadioLock = document.createElement('input');
    inputRadioLock.setAttribute('type', 'radio');
    inputRadioLock.setAttribute('name', `${info[0]}`);
    inputRadioLock.setAttribute('value', 'lock');
    inputRadioLock.checked = true;
    divProfile.appendChild(inputRadioLock);

    const lableUnlock = document.createElement('lable');
    lableUnlock.textContent = 'Unlock';
    divProfile.appendChild(lableUnlock);

    const inputRadioUnlock = document.createElement('input');
    inputRadioUnlock.setAttribute('type', 'radio');
    inputRadioUnlock.setAttribute('name', `${info[0]}`);
    inputRadioUnlock.setAttribute('value', 'lock');
    inputRadioUnlock.checked = false;
    divProfile.appendChild(inputRadioUnlock);

    const hr = document.createElement('hr');
    divProfile.appendChild(hr);

    const lableUserName = document.createElement('lable');
    lableUserName.textContent = 'Username';
    divProfile.appendChild(lableUserName);


    const inputUsername = document.createElement('input');
    inputUsername.setAttribute('type', 'text');
    inputUsername.setAttribute('name', `${info[0]}Username`);
    inputUsername.setAttribute('value', `${info[1].username}`);
    inputUsername.disabled = 'readonly';
    divProfile.appendChild(inputUsername);


    console.log(info)
    main.appendChild(divProfile);

}

function lockedUser(){

}


/*function createProfil(info) {
    const main = document.getElementById('main');
    const divProfile = el('div', undefined, 'profile',
        el('img', { 'src': './iconProfile2.png' }, 'userIcon', undefined),
        el('lable', undefined, undefined, 'Lock'),
        el('input', { 'type': 'radio', 'name': 'user1Locked', 'value': 'lock', '': 'checked' }, undefined, undefined),
        el('br', undefined, undefined, undefined),
        el('lable', undefined, undefined, 'Unlock'),
        el('input', { 'type': 'radio', name: 'user1Locked', 'value': 'unlock' }, undefined, undefined),
        el('hr', undefined, undefined, undefined),
        el('lable', undefined, undefined, 'Username'),
        el('input', { type: 'text', name: 'user1Username', 'value': `${info[1].name}`, '': 'disabled readonly' }),
        el('div', undefined, 'hiddenInfo',
            el('hr', undefined, undefined, undefined),
            el('lable', undefined, undefined, 'Email:'),
            el('input', { type: 'email', name: 'user1Email', 'value': `${info[1].email}`, '': 'disable readonly' }),
            el('lable', undefined, undefined, 'Age'),
            el('input', { type: 'email', name: 'user1Age', 'value': `${info[1].age}`, '': 'disable readonly' }, undefined),
        ),
        el('button', undefined, undefined, `Show more`)
    );
    console.log(divProfile)
    main.appendChild(divProfile);

}
function el(tagName, atr, classType, ...text) {
    let tag = document.createElement(tagName);

    if (classType != undefined) {
        tag.classList = classType;
    }

    if (atr != undefined) {
        for (let attribut of Object.keys(atr)) {
            tag[attribut] = atr[attribut];
        };
    }

    if (text[0] != undefined) {
        for (let word of text) {
            if (typeof word == 'string' || typeof word === 'number') {
                word = document.createTextNode(word);
            };
            tag.appendChild(word);
        };
    }
    return tag;

}*/