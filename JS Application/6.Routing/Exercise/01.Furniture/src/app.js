import { html, render } from './lib.js';
import { page } from './lib.js';


import { checkUserNav } from './views/auth.js';



function decorationContnt(ctx, next){
    checkUserNav();
    ctx.render = function(content){
        render(content, document.querySelector('.container'));
    };
    next();
};

page(decorationContnt);
page('/index.html', '/');
page()