import { getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (isOwner, hasUser, cartData) =>  html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${cartData.imageUrl} alt="example1" />
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

                ${hasUser 
                    ? isOwnerTemplate(isOwner) : nothing}
               
            </div>
        </section>`;

const isOwnerTemplate = (isOwner) => html` 
    <div id="action-buttons">
        ${isOwner 
            ? html`
        <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a>`
        : html`<a href="" id="buy-btn">Buy</a>`}
</div>`;

export async function showDetails(ctx){
    const id = ctx.params.id;
    const cartData = await getById(id);
    console.log(cartData)
    
    const isOwner = cartData._ownerId == ctx.user._id;
    const hasUser = Boolean(ctx.user);

    ctx.render(detailsTemplate(isOwner, hasUser, cartData));
}