import { deleteById, getById} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, shoes, onDelete) => html`
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src="${shoes.imageUrl}" alt="example1" />
                </div>
                <div id="info-wrapper">
                    <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
                    <p>
                        Model: <span id="details-model">${shoes.model}</span>
                    </p>
                    <p>Release date: <span id="details-release">${shoes.release}</span></p>
                    <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
                    <p>Value: <span id="details-value">${shoes.value}</span></p>
                </div>
        
                ${ isOwner 
                    ? html`<div id="action-buttons">
                    <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>` 
                : nothing}
                
            </div>
        </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);

    const hasUser = ctx.user;
    const isOwner = hasUser && hasUser._id == album._ownerId;

    ctx.render(detailsTemplate(hasUser, isOwner, album, onDelete));

    async function onDelete() {
        const condirmed = confirm('Are you sure?');

        if (condirmed) {
            deleteById(id);

            ctx.page.redirect('/catalog');
        };
    };
};