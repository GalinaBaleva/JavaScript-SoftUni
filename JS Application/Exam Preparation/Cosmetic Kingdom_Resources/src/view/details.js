import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (isOwner, hasUser, cartData, onDelete) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="${cartData.imageUrl}" alt="example1" />
                <p id="details-title">${cartData.name}</p>
                <p id="details-category">
                    Category: <span id="categories">${cartData.category}</span>
                </p>
                <p id="details-price">
                    Price: <span id="price-number">${cartData.price}</span>$</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Bought: <span id="buys">0</span> times.</h4>
                        <span>${cartData.description}</span>
                    </div>
                </div>
                
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    ${hasUser && !isOwner
                        ? html`<a href="" id="buy-btn">Buy</a>` 
                        : nothing}
                    ${hasUser && isOwner 
                        ? html`<a href="/edit/${cartData._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
              >Delete</a
            >` 
                    : nothing}
                </div>
            </div>
        </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const cartData = await getById(id);

    const hasUser = Boolean(ctx.user);
    const isOwner = Boolean(ctx.user && cartData._ownerId == ctx.user._id)

    ctx.render(detailsTemplate(isOwner, hasUser, cartData, onDelete));

    async function onDelete(){
        const confirmed = confirm('Are you sure!');
        
        if(confirmed){
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    };
};