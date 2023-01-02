const section = document.getElementById('loginView');
section.remove();

export function loginView(ctx){
    ctx.render(section);
}