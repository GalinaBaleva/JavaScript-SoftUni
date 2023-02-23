import { getLogout } from './data/data.js';
import { page } from './lib.js';
import { render } from './lib.js';


import { checkUserNav } from './views/auth.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

checkUserNav();

const root = document.querySelector('.container');

const token = sessionStorage.getItem('accessToken');
if (token) {
    document.getElementById('logoutBtn').addEventListener('click', getLogout);
};

function decorationContnt(ctx, next) {
    ctx.checkUserNav = checkUserNav();
    ctx.render = (content) => render(content, root);
    next();
};
page(decorationContnt);
page('/index.html', '/');
page('/', showDashboard)
page('/register', showRegister);
page('/login', showLogin);
page('/details*', showDetails);

page.start();
