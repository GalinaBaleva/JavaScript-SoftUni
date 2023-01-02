const section = document.getElementById('registerView');
section.remove();

export function registerView(ctx){
    ctx.render(section);
}