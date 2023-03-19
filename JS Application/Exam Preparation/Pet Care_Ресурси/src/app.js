import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showDetail } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updataNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('content');

page(decotarionContetx);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetail);
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/login', showLogin);
page('/register', showRegister);

updataNav();
page.start();

function decotarionContetx(ctx, next){
    ctx.render = renderMain;
    ctx.updataNav = updataNav;


    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
};

function renderMain(content){
    render(content, main);
};






