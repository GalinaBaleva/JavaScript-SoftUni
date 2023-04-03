import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const navRoot = document.querySelector('nav');


const navTamplate = (hasUser) => html`
        <div>
            <a href="/catalog">Dashboard</a>
        </div>
        ${hasUser 
        ? html` <div class="user">
            <a href="/create">Add Album</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`
        : html`<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
        `;

export function updateNav() {
    const user = getUserData();

    render(navTamplate(user), navRoot);
};

function onLogout(){
    console.log('Logout');
};