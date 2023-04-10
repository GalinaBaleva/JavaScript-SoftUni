import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (jobs) => html`
`;

export async function showCatalog(ctx){
    const shoes = await getAll();

    ctx.render(catalogTemplate(shoes));
};