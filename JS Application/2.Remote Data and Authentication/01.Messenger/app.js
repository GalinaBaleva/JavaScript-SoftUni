const areaForMessages = document.getElementById('messages');
const authorsName = document.querySelector('[name="author"]');
let message = document.querySelector('[name="content"]');
const url = `http://localhost:3030/jsonstore/messenger`;

async function attachEvents() {
    areaForMessages.value = '';

    const retrievedMessages = await retrievingMessages();
    
    if (retrievedMessages == 'Error') {
        areaForMessages.value = `Error`;
        
        return;
    };
    
    const messages = Object.values(retrievedMessages).map(mes => `${mes.author}: ${mes.content}`);
    areaForMessages.value = messages.join('\n');

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onSubmit);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', onRefresh)
};

async function onSubmit(){
    let name = authorsName.value;
    let mess = message.value;
    
    if(authorsName.value == '' || message.value == ''){
        authorsName.value = '';
        message.value = '';
        return;
    };

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json.stringify({name: mess})
    };

    const res = await fetch(url, options);
    const respons = await res.json();

    console.log(respons)

    authorsName.value = '';
    message.value = '';
};


async function retrievingMessages() {
    try {
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error(`Error`);
        };

        const respons = await res.json();

        return respons;

    } catch (error) {
        return error.message;
    };
};

async function onRefresh(nameOfAuthor, messageOfAuthor){

}


attachEvents();