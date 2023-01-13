const section =  document.getElementById('detailsView');
section.remove();

let ctx = null;

export function detailsView(inCtx){
    ctx = inCtx;


    ctx.render(section);

    console.log(ctx.options[0].target);
}