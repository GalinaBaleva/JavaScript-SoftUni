import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { updateNav } from './views/nav.js';
import { showLogin } from './views/login.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';

const root = document.getElementById('main-content');

page(decorationContext);
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/edit/:id', showEdit);
page('/search', showSearch);

updateNav();
page.start();


function decorationContext(ctx, next){
    ctx.render = renderMain;
    ctx.updataNav = updateNav;


    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
};


function renderMain(content) {
    render(content, root)
};