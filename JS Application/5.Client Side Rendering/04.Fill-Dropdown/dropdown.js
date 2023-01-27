import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.getElementById('menu');

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

addItem();

async function addItem() {
    const data = await request();

    const values = Object.values(data);

    const menu = html`
    ${repeat(values, item => item._id, item => html`<option value=${item._id}>${item.text}</option>`)}`
    render(menu, root);

};

function onSubmit(event) {
    event.preventDefault();
    const value = event.target.querySelector('#itemText');
    request('POST', {text: value.value});
    event.target.reset()
    addItem();
};

async function request(method, body) {
    const options = {
        method: method,
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    };

    const respons = await fetch(url, options);

    const data = await respons.json();

    return data;
};

