const section =  document.getElementById('detailsView');
section.remove();

const ctx = null;

export function detailsView(inCtx){
    ctx = inCtx;
    

    ctx.render(section);
}