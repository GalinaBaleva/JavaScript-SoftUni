import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (jobs) => html`
        <section id="catalog-page">
            <h1>All Games</h1>
            ${jobs.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>`
        : jobs.map(g => html`
                        <div class="allGames">
                <div class="allGames-info">
                    <img src="${g.imageUrl}">
                    <h6>Action</h6>
                    <h2>${g.title}</h2>
                    <a href="/details/${g._id}" class="details-button">Details</a>
                </div>
            </div>`)}
        </section>`;

export async function showCatalog(ctx) {
    const shoes = await getAll();

    ctx.render(catalogTemplate(shoes));
};