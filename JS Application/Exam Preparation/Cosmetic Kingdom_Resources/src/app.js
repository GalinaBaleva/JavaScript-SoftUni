import { html, render, nothing, page } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './view/catalog.js';
import { showHome } from './view/home.js';
import { showLogin } from './view/login.js';
import { updateNav } from './view/nav.js';
import { showRegister } from './view/register.js';

const root = document.querySelector('main');


page(decorationContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/login', showLogin);
page('/register', () => console.log('Register'));
page('/create', () => console.log('Create'));
page('/catalog/:id', () => console.log('Details'));
page('/edit/:id', () => console.log('Edit'));

updateNav();
page.start();

function decorationContext(ctx, next) {
    ctx.render = renderMein;
    ctx.updateNav = updateNav;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    };

    next();
};

function renderMein(content) {
    render(content, root);
};


