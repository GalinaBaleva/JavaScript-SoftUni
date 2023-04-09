import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
                <a href="/">Dashboard</a>
                ${hasUser
        ? html`<div id="user">
                    <a href="/my">My Posts</a>
                    <a href="/create">Create Post</a>
                    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
                </div>`
        : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}`;

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav)
};

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
};