import { getAll } from "../api/data.js";
import { html } from "../lib.js";


const dashboardTemplate = (products) => html`<h2>Products</h2>
<section id="dashboard">
  ${products.length == 0
    ? html`<h2>No products yet.</h2>`
    : products.map(
        (p) => html`       
        <div class="product">
            <img src="${p.imageUrl}" alt="example1" />
            <p class="title">${p.name}</p>
            <p><strong>Price:</strong><span class="price">${p.price}</span>$</p>
            <a class="details-btn" href="/details/${p._id}">Details</a>
          </div>
        `
      )}
</section>`;

export async function showCatalog(ctx) {
  const products = await getAll();

  ctx.render(dashboardTemplate(products));

};