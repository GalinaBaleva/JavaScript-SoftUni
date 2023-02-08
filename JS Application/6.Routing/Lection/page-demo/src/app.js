import page from '../node_modules/page/page.mjs';
import {html, render} from '../node_modules/lit-html/lit-html.js';


import { notFound } from './notFound.js';
import { showAbout } from './views/about.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showHome } from './views/home.js';

function decorateContent(ctx, next){
    ctx.render = function(content){
        render(content, document.querySelector('mein'));
        next();
    };
};

page(decorateContent)
page('/index.html', '/');
page('/', showHome);
page('/recipes', showCatalog);
page('/about', showAbout);
page('/contact*', showContact);
page('*', notFound);


page.start();