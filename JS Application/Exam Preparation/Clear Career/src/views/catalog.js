import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (jobs) => html`
        <section id="dashboard">
          <h2>Job Offers</h2>
          ${jobs.length == 0 
          ? html`<h2>No offers yet.</h2>` 
          : jobs.map(s => html`
                  <div class="offer">
            <img src="${s.imageUrl}" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${s.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${s.salary}</span></p>
            <a class="details-btn" href="/details/${s._id}">Details</a>
          </div>`)}
        </section>`;

export async function showCatalog(ctx){
    const shoes = await getAll();

    ctx.render(catalogTemplate(shoes));
};