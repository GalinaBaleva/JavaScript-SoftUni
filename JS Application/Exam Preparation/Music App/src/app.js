import { logout } from './api/user.js';
import { html, render, page } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';

const root = document.getElementById('main-content');

const navTemplate = (user, logout) => html`            
<nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <!--All user-->
        <li><a href="/Catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>

        ${user 
            ? html`<li><a href="/create">Create Album</a></li>
                    <li><a @click=${logout} href="javascript:void(0)">Logout</a></li>`
            : html`<li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>`}
    </ul>
</nav>`;


page(decorationContext);
page('/', showHome);
page('/login', () => console.log('login'));
page('/register', showRegister);
page('/create', () => console.log('create'));
page('/catalog', () => console.log('catalog'));
page('/edit/:id', () => console.log('edit'));
page('/catalog/:id', () => console.log('details'));
page('/search', () => console.log('search'));

page.start();


function decorationContext(ctx, netx) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    };
    
    render(navTemplate(ctx.user, logout), document.querySelector('header'));
    ctx.render = renderMain;

    netx();
};


function renderMain(content) {
    render(content, root)
};