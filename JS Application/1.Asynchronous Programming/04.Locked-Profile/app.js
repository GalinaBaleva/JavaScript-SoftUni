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

    const labelLock = document.createElement('label');
    labelLock.textContent = 'Lock';
    divProfile.appendChild(labelLock);

    const inputRadioLock = document.createElement('input');
    inputRadioLock.setAttribute('type', 'radio');
    inputRadioLock.setAttribute('name', `${info[1].username}Locked`);
    inputRadioLock.setAttribute('value', 'lock');
    inputRadioLock.checked = 'checked';
    divProfile.appendChild(inputRadioLock);

    const labelUnlock = document.createElement('label');
    labelUnlock.textContent = 'Unlock';
    divProfile.appendChild(labelUnlock);

    const inputRadioUnlock = document.createElement('input');
    inputRadioUnlock.setAttribute('type', 'radio');
    inputRadioUnlock.setAttribute('name', `${info[1].username}Locked`);
    inputRadioUnlock.setAttribute('value', 'unlock');
    inputRadioUnlock.checked = false;
    divProfile.appendChild(inputRadioUnlock);

    const br = document.createElement('br');
    divProfile.appendChild(br);

    const hr = document.createElement('hr');
    divProfile.appendChild(hr);

    const labelUserName = document.createElement('label');
    labelUserName.textContent = 'Username';
    divProfile.appendChild(labelUserName);


    const inputUsername = document.createElement('input');
    inputUsername.setAttribute('type', 'text');
    inputUsername.setAttribute('name', `${info[1].username}Username`);
    inputUsername.setAttribute('value', `${info[1].username}`);
    inputUsername.disabled = true;
    inputUsername.readOnly = true;
    divProfile.appendChild(inputUsername);

    const divHidden = document.createElement('div');
    divHidden.classList = 'hiddenInfo';
    divHidden.setAttribute('id', `${info[1].username}HiddenFields`);
    divProfile.appendChild(divHidden);

    const hrHidden = document.createElement('hr');
    divHidden.appendChild(hrHidden);

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email:';
    divHidden.appendChild(labelEmail);

    const inputiHidden = document.createElement('input');
    inputiHidden.setAttribute('type', 'email');
    inputiHidden.setAttribute('name', `${info[1].username}Email`);
    inputiHidden.value = `${info[1].email}`;
    inputiHidden.disabled = true;
    inputiHidden.readOnly = true;
    divHidden.appendChild(inputiHidden);

    const labelAge = document.createElement('label');
    labelAge.textContent = 'Age:';
    divHidden.appendChild(labelAge);

    const inputAge = document.createElement('input');
    inputAge.setAttribute('type', 'email');
    inputAge.setAttribute('name', `${info[1].username}Age`);
    inputAge.value = `${info[1].age}`;
    inputAge.disabled = true;
    inputAge.readOnly = true;
    divHidden.appendChild(inputAge);

    const buttonSchow = document.createElement('button');
    buttonSchow.addEventListener('click',  function(){
        schowMore(inputRadioLock, inputRadioUnlock, divHidden);
    })
    buttonSchow.textContent = 'Schow more';
    divProfile.appendChild(buttonSchow);


    main.appendChild(divProfile);
}

function schowMore(inputRadioLock, inputRadioUnlock, divHidden){

    if(inputRadioLock.checked == true){


    } else if (inputRadioUnlock.checked == true){
        if(divHidden.classList == 'hiddenInfo'){
            divHidden.classList.remove('hiddenInfo');
        } else {
            divHidden.classList = 'hiddenInfo'
        }

        
    }
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