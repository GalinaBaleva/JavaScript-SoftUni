const section =  document.getElementById('detailsView');
section.remove();

export function detailsView(ctx){
    ctx.render(section);
}