import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { showMy } from './views/my.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';



const main = document.querySelector('main');


page(decorationContext);
page('/', showHome);
page('/my', showMy);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

updateNav();
page.start();

function decorationContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;


    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
};

function renderMain(content){
    render(content, main);
};
