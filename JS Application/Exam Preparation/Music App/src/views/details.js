import { deleteAlbum, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailTemplate = (albumData, isOwner, onDelete) => html`        
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${albumData.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${albumData.name}</h1>
                <h3>Artist: ${albumData.artist}</h3>
                <h4>Genre: ${albumData.genre}</h4>
                <h4>Price: ${albumData.price}</h4>
                <h4>Date: ${albumData.releaseDate}</h4>
                <p>Description: ${albumData.description}</p>
            </div>

            ${isOwner ? html`
            <div class="actionBtn">
                <a href="/edit/${albumData._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>` : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx){
    const id = ctx.params.id;
    const albumData = await getById(id);

    const isOwner = ctx.user._id == albumData._ownerId;

    ctx.render(detailTemplate(albumData, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this album?');

        if(choice){
            await deleteAlbum(id);
            ctx.page.redirect('/catalog');
        };
    };
};

