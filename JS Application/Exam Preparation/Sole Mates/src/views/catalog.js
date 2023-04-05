import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (shoes) => html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          ${shoes.length == 0 
          ? html`<h2>There are no items added yet.</h2>` 
          : shoes.map(s => html`
            <ul class="card-wrapper">
            <li class="card">
              <img src="${s.imageUrl}" alt="eminem" />
              <p>
                <strong>Brand: </strong><span class="brand">${s.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${s.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${s.value}</span>$</p>
              <a class="details-btn" href="/details/${s._id}">Details</a>
            </li>
          </ul> `)}
        </section>`;

export async function showCatalog(ctx){
    const shoes = await getAll();

    ctx.render(catalogTemplate(shoes));
};