const section = document.getElementById('homeView');
section.remove();

let ctx = null;

export function homeView(inCtx){
    ctx = inCtx;
    ctx.render(section);
}