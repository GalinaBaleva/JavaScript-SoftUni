const section = document.getElementById('createView');
section.remove();

export function createView(ctx){
    ctx.render(section);
}