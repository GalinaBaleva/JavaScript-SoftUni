import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (mems) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            ${mems.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
            : mems.map(m => html`<div id="memes">
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${m.title}</p>
                            <img class="meme-image" alt="meme-img" src="${m.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${m._id}">Details</a>
                        </div>
                    </div>
                </div>`)}
			</div>
        </section>`;

export async function showCatalog(ctx){
    const mems = await getAll();
    console.log(mems)

    ctx.render(catalogTemplate(mems));
};