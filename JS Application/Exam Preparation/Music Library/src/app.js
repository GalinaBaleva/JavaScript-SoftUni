
import { page, render} from "./lib.js";
import { showHome } from "./views/home.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";

const mainRoot = document.querySelector('main');

page(decorationContent);
page('/', showHome);
page('/catalog', () => console.log('Catalog'));
page('/register', showRegister);
page('/login', () => console.log('login'));
page('/create', () => console.log('create'));
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