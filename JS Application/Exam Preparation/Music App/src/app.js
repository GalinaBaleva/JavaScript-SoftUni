import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { updataNav } from './views/nav.js';
import { showLogin } from './views/login.js';

const root = document.getElementById('main-content');

page(decorationContext);
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/create', () => console.log('create'));
page('/catalog', () => console.log('catalog'));
page('/edit/:id', () => console.log('edit'));
page('/catalog/:id', () => console.log('details'));
page('/search', () => console.log('search'));

updataNav();
page.start();


function decorationContext(ctx, next){
    ctx.render = renderMain;
    ctx.updataNav = updataNav;


    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
};


function renderMain(content) {
    render(content, root)
};