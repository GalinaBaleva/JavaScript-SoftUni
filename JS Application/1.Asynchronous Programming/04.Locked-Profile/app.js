// async function lockedProfile(){
//     const main = document.getElementById('main');
//     main.replaceChildren();

//     const url = 'http://localhost:3030/jsonstore/advanced/profiles';

//     try{
//         const answer = await fetch(url);
        
//         if(answer.status !== 200){
//             throw new Error(`Error`);
//         }

//         const data = await answer.json();
        
//         Object.values(data).forEach(element => {
//             let divProfile = el('div', 'profile', [],  
//             el('img', 'userIcon', [['src', './iconProfile2.png']], ''),
//             el('label', '', [], 'Lock'),
//             el('input', '', [['type', 'radio'], ['name', element._id + 'Locked'], ['value', 'lock'], ['checked']], ''),
//             el('label', '', [], 'Unlock'),
//             el('input', '', [['type', 'radio'], ['name', element._id + 'Locked'], ['value', 'unlock']], ''),
//             el('br', '', [], ''),
//             el('hr', '', [], ''),
//             el('label', '', [], 'Username'),
//             el('input', '', [['type', 'text'], ['name', element._id + 'Username'], ['value', element.username], ['disabled', 'true'], ['readonly', 'true']], ''),
//             el('div', 'hiddenInfo', [], 
//             el('hr', '', [], ''),
//             el('label', '', [], 'Email:'),
//             el('input', '', [['type', 'email'], ['name', element._id + 'Email'], ['value', element.email], ['disabled'], ['readonly']], ''),
//             el('label', '', [], 'Age:'),
//             el('input', '', [['type', 'emai'], ['name', element._id + 'Age'], ['value', element.age], ['disabled'], ['readonly']])
//             ),
//             el('button', '', [], 'Show more')
//             );
//             main.appendChild(divProfile);
//         });
//         showMore();
//     } catch(error){
//         const div = el('div', '', '', error.status);
//         main.appendChild(div);
//     }
// }

// function showMore(){
//     let buttons = document.getElementsByTagName('button');
//     Array.from(buttons).forEach(el => el.addEventListener('click', onClick));
// }
    
// function onClick(e){
//     const parent = e.target.parentNode;
//     let divHiddenInfo = '';
//     let condition = '';
//     Array.from(parent.childNodes).filter(el => {
//         if(el.tagName === 'DIV'){
//             divHiddenInfo = el;
//         } else if(el.tagName === 'INPUT' && el.checked === true){
//             condition = el.value;
//         }
//     });

//     if(condition === 'unlock'){
//         if(divHiddenInfo.classList.value === 'hiddenInfo'){
//             divHiddenInfo.classList.remove('hiddenInfo');
//             e.target.textContent = 'Show Less';
//         } else {
//             divHiddenInfo.classList.add('hiddenInfo');
//             e.target.textContent = 'Show More';
//         }
//     } 
// }

// function el(tagName, className, attributName, ...text){
//     let tag = document.createElement(tagName);

//     if(className !== ''){
//         tag.classList.add(className);
//     };

//     if(attributName.length !== 0){
//         for(let atr of attributName){
//             if(atr[1] !== undefined){
//                 tag.setAttribute(atr[0], atr[1]);
//             } else {
//                 tag.setAttribute(atr[0], true);
//             }

//         }
//     };

//     for(let word of text){
//         if(typeof(word) == 'string' || typeof(word) == 'number'){
//             word = document.createTextNode(word);
//         }
//         tag.appendChild(word);
//     };

//     return tag;
// }



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