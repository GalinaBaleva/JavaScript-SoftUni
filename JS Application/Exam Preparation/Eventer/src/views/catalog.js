import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (events) => html`
        <h2>Current Events</h2>
        ${ events.length == 0 
    ? html`<h4>No Events yet.</h4>`
    : html`
     <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${events.map(e => html`
          <div class="event">
            <img src="${e.imageUrl}" alt="example1" />
            <p class="title">${e.name}</p>
            <p class="date">${e.date}</p>
            <a class="details-btn" href="/details/${e._id}">Details</a>
          </div>`)}
        </section>`
}`;

export async function showCatalog(ctx) {
    const events = await getAll();
    console.log(events)

    ctx.render(catalogTemplate(events));
};