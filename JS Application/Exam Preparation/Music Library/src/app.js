
import { page, render} from "./lib.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
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
page('/detail/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));

updateNav();
page.start();

function decorationContent(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
};

function renderMain(content){
    render(content, mainRoot);
};