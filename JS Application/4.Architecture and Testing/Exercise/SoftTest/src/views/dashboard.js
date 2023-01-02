const section = document.getElementById('dashboard-holder');
section.remove();

export function dashboardView(ctx){
    ctx.render(section);
}