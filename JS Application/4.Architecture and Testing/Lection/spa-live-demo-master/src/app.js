import { checkUserNav, onLogout } from './auth.js';
import { showHomeView } from './home.js';
import { showCatalogView } from './catalog.js';
import { showLoginView } from './login.js';
import { showRegisterView } from './register.js';
import { showCreateView } from './create.js';
import { showDetailsView } from './details.js';

document.querySelector('nav').addEventListener('click', onNavigate)

function registerView(id, showView) {
    document.getElementById(id).addEventListener('click', showView);
}

const views = {
    "home-link": showHomeView,
    "catalog-link": showCatalogView,
    "login-link": showLoginView,
    "register-link": showRegisterView,
    "logout-link": onLogout,
    "create-link": showCreateView,
    "details-link": showDetailsView
};

checkUserNav();

// Start application in home view
goto("home-link");

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const id = event.target.id;
        if (goto(id)) {
            event.preventDefault();
        }
    }
};

function goto(viewName, ...params){
    const view = views[viewName];
    if(typeof view == 'function'){

        /* const ctx = {
              goto,
            checkUserNav,
            render
        };

        view(ctx, ...params); it meens the same*/

        view({
            goto,
            checkUserNav,
            render
        }, ...params);
        return true;
    };

    return false;
};

function render(section){
    document.querySelector('main').replaceChildren(section);
}