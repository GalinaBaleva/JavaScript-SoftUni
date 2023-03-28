import { getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (isOwner, hasUser, cartData) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought:<span id="buys">${totalBuysCount}</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>
    </div>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const cartData = await getById(id);
    console.log(cartData)

    const isOwner = cartData._ownerId == ctx.user._id;
    const hasUser = Boolean(ctx.user);

    ctx.render(detailsTemplate(isOwner, hasUser, cartData));
}