import { deleteAlbum, getAllLikes, getById, getUserLike, like } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, album, onDelete, onLike, getLikes, getUserLikes) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${album.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${album.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${getLikes}</span></div>
    
            <div id="action-buttons">
                ${hasUser && !isOwner && getUserLikes < 1 ? html` <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : nothing}
                ${isOwner ? html`
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing}
            </div>
        </div>
    </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);

    const hasUser = ctx.user;
    const isOwner = hasUser && hasUser._id == album._ownerId;

    const getLikes = await getAllLikes(id);

    const getUserLikes = await getUserLike(hasUser._id, id);

    ctx.render(detailsTemplate(hasUser, isOwner, album, onDelete, onLike, getLikes, getUserLikes));

    async function onDelete() {
        const condirmed = confirm('Are you sure?');

        if (condirmed) {
            deleteAlbum(id);

            ctx.page.redirect('/catalog');
        };
    };

    async function onLike(){
        await like(id);
        ctx.page.redirect('/detail/' + id);
    };

    
};