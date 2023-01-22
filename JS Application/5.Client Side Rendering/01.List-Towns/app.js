import { html, render, nothing } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

const root = document.getElementById('root');

function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = formData.get('towns').split(', ').map(el => el.trim());
    renderFunc(data);
    event.target.reset()
    
};


function renderFunc(data){
    const ulList = createListTowns(data);
    render(ulList, root)
};

function createListTowns(data){
    const ul = html`
    <ul>
        ${data.map(el => html`<li>${el}</li>`)};
    </ul>`;

    return ul;
};




