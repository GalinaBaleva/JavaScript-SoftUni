import { showSearch } from './views/search.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updataNav } from './views/nav.js';
import { showRegister } from './views/register.js';


const main = document.querySelector('main');


page(decorationContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);

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
