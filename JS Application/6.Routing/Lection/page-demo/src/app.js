import page from '../node_modules/page/page.mjs';
import { notFound } from './notFound.js';
import { showAbout } from './views/about.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showHome } from './views/home.js';


function firstHandler(ctx, next){
    ctx.myVar = 5;
    console.log('first handler');
    next();
};

function secondHandler(ctx, next){
    console.log('second handler');
    next();
}

page('/index.html', '/');
page('/', firstHandler, secondHandler, showHome);
page('/catalog', showCatalog);
page('/about', showAbout);
page('/contact*', showContact);
page('*', notFound);


page.start();