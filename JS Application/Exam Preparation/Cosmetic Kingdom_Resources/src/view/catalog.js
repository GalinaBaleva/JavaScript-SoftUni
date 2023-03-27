import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (hasProducts) => html`
        <h2>Products</h2>
        ${hasProducts.length == 0 ? html`<h2>No products yet.</h2>` : hasProducts.map(cartTemplate)}`;

const cartTemplate = (cart) => html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          <div class="product">
            <img src=${cart.imageUrl} alt="example1" />
            <p class="title">
              ${cart.name}
            </p>
            <p><strong>Price:</strong><span class="price">${cart.price}</span>$</p>
            <a class="details-btn" href="/catalog/${cart._id}">Details</a>
          </div>`;

export async function showCatalog(ctx) {
  const products = await getAll();

  ctx.render(catalogTemplate(products));

};