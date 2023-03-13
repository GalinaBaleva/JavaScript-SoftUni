import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';
import { getAll } from "../data/recipes.js";

const catalogTmplate = (recipes, page, pages) => html`
<h2>Catalog</h2>
<div>
    ${page > 1 ? html`<a href=${`?page=${page - 1}`}>&lt; Prev</a>` : nothing}
    <span>Page ${page} / ${pages}</span>
    ${page < pages ? html`<a href=${`?page=${page + 1}`}>Next &gt;</a>` : nothing}
</div>
<ul>
    ${repeat(recipes, r => r._id, recipeCardTemplate)}
</ul>`;

const recipeCardTemplate = (recipe) => html`
<li><a href=${'/recipes/' + recipe._id}>${recipe.name}</a></li>`

export async function showCatalog(ctx) {
    const page = Number(ctx.query.page) || 1;

    ctx.render(html`<p>Loding &hellip;</p>`)
    const { data: recipes, pages: pages } = await getAll(page);

    ctx.render(catalogTmplate(recipes, page, pages));
};