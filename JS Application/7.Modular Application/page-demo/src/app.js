import { page } from './lib.js';
import { html, nothing, render } from './lib.js';

import { notFound } from './notFound.js';
import { showAbout } from './views/about.js';
import { showCreate } from './views/create.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showHome } from './views/home.js';
import { showDetails } from './views/details.js';
import { showLogin } from './views/login.js';
import { getUserData } from './data/util.js';
import { showRegister } from './views/register.js';
import { logout } from './views/auth.js';

const navTamplate = (user) => html`
        <a href="/">Home</a>
        <a href="/recipes">Catalog</a>
        ${user ? html`<a href="/create">Create</a>` : nothing}
        <a href="/about">About</a>
        ${user ? html`<span>Welcome, ${user.username}</span><a href='/logout'>Logout</a>` : html`
        <a href="/login">Login</a>
        <a href="/register">Register</a>`}
        `;

function onLogout (ctx){
    logout();
    ctx.page.redirect('/');
}

function decorateContent(ctx, next) {
    render(navTamplate(ctx.user), document.querySelector('nav'));

    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    };
    next();
};

function parseQuery(ctx, next) {
    ctx.query = {};

    if (ctx.querystring) {
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(e => e.split('=')));
        Object.assign(ctx.query, query);
    };
    next();
};


function session(ctx, next) {
    const user = getUserData()

    if (user) {
        ctx.user = user;
    };

    next();
}

page(session);
page(decorateContent);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/recipes', showCatalog);
page('/create', showCreate);
page('/recipes/:id', showDetails);
page('/about', showAbout);
page('/contact*', showContact);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', onLogout);
page('*', notFound);


page.start();