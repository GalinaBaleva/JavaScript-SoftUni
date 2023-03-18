import { page, render } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';

const main = document.getElementById('content');

page(decotarionContetx);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/login', showLogin);
page('/register', () => console.log('register'));


page.start();

function decotarionContetx(ctx, next){
    ctx.render = renderMain;


    next();
};

function renderMain(content){
    render(content, main);
};

