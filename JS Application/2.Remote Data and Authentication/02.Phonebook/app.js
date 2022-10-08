const ulList = document.getElementById('phonebook');
ulList.replaceChildren();
let person = document.getElementById('person');
let phone = document.getElementById('phone');

function attachEvents() {
    person.value = '';
    phone.value = '';
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', onLoad);

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', onCreate);
};

const url = `http://localhost:3030/jsonstore/phonebook`;

async function onLoad() {
    ulList.replaceChildren();
    try {
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error(`Error`);
        }
        const respons = await res.json();

        Object.values(respons).forEach(el => {
            const liTag = document.createElement('li');
            liTag.textContent = `${el.person}: ${el.phone}`;
            const btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', async (event) => {
                onDelete(event, el._id)
            });
            liTag.appendChild(btn);
            ulList.appendChild(liTag);
        });

    } catch (error) {
        return;
    };
};

async function onCreate() {
    if (person.value == '' || phone.value == '') {
        person.value = '';
        phone.value = '';
        return;
    };

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'person': person.value, 'phone': phone.value })
    };
    try {
        const res = await fetch(url, options);
        const respons = await res.json();

        person.value = '';
        phone.value = '';

    } catch (error) {
        return;
    };
};

async function onDelete(event, id) {
    const url2 = `http://localhost:3030/jsonstore/phonebook/` + id
    
    const options = {
        method: 'delete'
    };

    try {
        const res = await fetch(url2, options);
        const respons = await res.json();
        event.target.parentNode.remove()

    } catch (error) {
        return;
    };
};

attachEvents();