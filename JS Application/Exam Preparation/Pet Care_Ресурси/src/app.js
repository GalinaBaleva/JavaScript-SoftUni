import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetail } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updataNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('content');

page(decorationContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetail);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

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

function renderMain(content){
    render(content, main);
};






