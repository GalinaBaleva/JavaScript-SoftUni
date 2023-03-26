import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";

const rootNav = document.querySelector('nav');

const navTemplate = (hasUser) => html`        
<div>
    <a href="/catalog">Products</a>
</div>
${hasUser ? html`
<div class="user">
    <a href="/create">Add Product</a>
    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
</div>` 
: html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`}`;

export async function updateNav(){
    const user = getUserData();
    render(navTemplate(user), rootNav);
};

async function onLogout(){
    logout();
    updateNav();

    page.redirect('/');
};


