export function showHome(ctx, next){
    console.log(ctx);

    document.querySelector('main').innerHTML = '<h2>Home Page</h2><button>Click Me</button>';
    document.querySelector('button').addEventListener('click', () => {
        ctx.page.redirect('/contact');
    });

};