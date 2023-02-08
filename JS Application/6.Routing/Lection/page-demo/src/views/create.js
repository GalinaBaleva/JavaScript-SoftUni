import { html } from "../../node_modules/lit-html/lit-html.js";

const createTmplate = () => html`
<h2>Create</h2>`

export function showCreate(ctx) {
    ctx.render(createTmplate());
}