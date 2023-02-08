import { html } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = () => html`
<h2>Product Details</h2>`;

export function showDetails(ctx){
    ctx.render(detailsTemplate());
}