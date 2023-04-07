import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
            <a href="/catalog">All Memes</a>

             ${hasUser 
             ? html` <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${hasUser.email}</span>
                    <a href="/user">My Profile</a>
                    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
                </div>
            </div>` 
            : html`<div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>`}`;

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav)
};

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
};

const notificationTemplate = (message) => html`
        <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${message}</span>
            </div>
        </section>`;

