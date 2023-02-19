import {page} from './lib.js';
import { html, render } from './lib.js';



import { checkUserNav } from './views/auth.js';
import { showDashboard } from './views/dashboard.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


const root = document.querySelector('.container');

function decorationContnt(ctx, next){
    checkUserNav();
    ctx.render = (content) => render(content, root);
    next();
};
page(decorationContnt);
page('/index.html', '/');
page('/register', showRegister);
page('/dashboard', showDashboard)
page('/login', showLogin)



page.start();