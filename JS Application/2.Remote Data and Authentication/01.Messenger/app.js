const areaForMessages = document.getElementById('messages');
const authorsName = document.querySelector('[name="author"]');
let message = document.querySelector('[name="content"]');

async function attachEvents() {

    const retrievedMessages = await retrievingMessages();
    console.log(retrievedMessages)

    //adding eventListeners
    

    if (retrievedMessages == undefined) {
        areaForMessages.value = `Error`;

        return;
    };

    const messages = Object.values(retrievedMessages);
}

async function retrievingMessages() {
    const url = `http://localhost:3030/jsonstore/messenger`;

    try {
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error(`Error`);
        };

        const respons = await res.json();

        return respons;

    } catch (error) {
        console.log(error.message)
    }
}


attachEvents();