import { render, html } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

function createCatsCard(){
    const ul = html`
    <ul>
        ${cats.map(cat => createCat(cat))}
    </ul>`;

    render(ul, root);
};

function createCat(cat){
    return html`
                <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click="${onClick}">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`;
}

function onClick(event){
    const button = event.target;
    const parent = event.target.parentElement.querySelector('div');
    let divHidden = parent.style.display;

    if(divHidden === 'none'){
        parent.style.display = 'block';
        button.textContent = 'Hide status code';
    } else {
        parent.style.display = 'none';
        button.textContent = 'Show status code';
    };
}

createCatsCard()