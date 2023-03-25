import { html } from "../lib.js";

const rootNav = document.querySelector('nav');

const navTemplate = (hasUser) => html`        
<div>
    <a href="/catalog">Products</a>
</div>
${hasUser ? html`
<div class="user">
    <a href="/create">Add Product</a>
    <a href="/logout">Logout</a>
</div>` 
: html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`}`;

async function showNav(ctx){
    
}


