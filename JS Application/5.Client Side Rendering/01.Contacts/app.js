import { contacts } from './contacts.js';
import { html, render, nothing } from './node_modules/lit-html/lit-html.js'

const root = document.getElementById('contacts');

const contactsCard = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click=${onClick.bind(null, contact.id)}>Details</button>
        <div class="details" id="${contact.id}">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>`;

render(contacts.map(contactsCard), root)


function onClick(id, event) {
    const index = contacts.find(x => x.id == id);

    const div = event.target.parentElement.querySelector('.info>div');
    div.className = div.className === 'details' ? 'inactive' : 'details'
}