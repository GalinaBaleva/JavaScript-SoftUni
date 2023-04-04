
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";

const mainRoot = document.querySelector('main');

page(decorationContent);
page('/', showHome);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/detail/:id', showDetails);
page('/edit/:id', showEdit);

updateNav();
page.start();

function decorationContent(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    };

    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
};

function renderMain(content) {
    render(content, mainRoot);
};