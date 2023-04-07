import { deleteById, getById} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, mem, onDelete) => html`
        <section id="meme-details">
            <h1>Meme Title: ${mem.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${mem.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${mem.description}
                    </p>
                    ${hasUser && isOwner 
                      ? html`<a class="button warning" href="/edit/${mem._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>`
                    : nothing}
                </div>
            </div>
        </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const mem = await getById(id);

    const hasUser = ctx.user;
    const isOwner = hasUser && hasUser._id == mem._ownerId;
    console.log(isOwner)


    ctx.render(detailsTemplate(hasUser, isOwner, mem, onDelete));

    async function onDelete() {
        const condirmed = confirm('Are you sure?');

        if (condirmed) {
            deleteById(id);

            ctx.page.redirect('/catalog');
        };
    };
};