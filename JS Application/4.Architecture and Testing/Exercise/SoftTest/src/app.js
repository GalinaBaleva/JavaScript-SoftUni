import { onLogout, checkUserNav } from "./views/auth.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

document.querySelector('nav').addEventListener('click', onNavigate);


const views = {
    "home-link": homeView,
    "dashboard-link": dashboardView,
    "create-link": createView,
    "detailsView": detailsView,
    "logout-link":  onLogout,
    "login-link": loginView,
    "register-link": registerView

};

checkUserNav();

goto("home-link");

function onNavigate(event){
    if(event.target.tagName == 'A'){
        event.preventDefault();
        const id = event.target.id;
        if(goto(id)){
            event.preventDefault();
        }
    } else if(event.target.parentElement.tagName == 'A'){
        const id = event.target.parentElement.id;
        if(goto(id)){
            event.preventDefault();
        }
    } 
}

function goto(viewName, ...params){
    const view = views[viewName];
    if(typeof view == 'function'){
        view({
            goto,
            checkUserNav,
            render,
            options: null
        });
        return true;
    };
    return false;
}

function render(section){
    document.querySelector('main').replaceChildren(section);
}