import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/nav.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showUserProfile } from './views/my.js';



const main = document.querySelector('main');


page(decorationContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/user', showUserProfile);

updateNav();
page.start();

function decorationContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    ctx.notification = notificationMessage;


    const user = getUserData();
    if (user) {
        ctx.user = user;
    }
    next();
};

function renderMain(content) {
    render(content, main);
};

export function notificationMessage(message) {
    setTimeout(function () {
        const box = document.querySelector('.notification');
        const messageBox = box.querySelector('span');
        messageBox.textContent = message;
        box.style.display = 'inline-block';
    });
    setTimeout(function () {
        const box = document.querySelector('.notification');
        const messageBox = box.querySelector('span');
        messageBox.textContent = '';
        box.style.display = 'none';
    }, 3000);
};

