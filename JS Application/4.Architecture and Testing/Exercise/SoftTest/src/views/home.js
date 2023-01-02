const section = document.getElementById('homeView');
section.remove();

export function homeView(ctx){
    ctx.render(section);
}