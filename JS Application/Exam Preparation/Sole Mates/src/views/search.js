import { search } from "../api/data.js";
import { html, render, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const searchTemplate = (hasUser, onSearch) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch}class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        
    </div>
</section>`;

const resultTemplate = (result, hasUser) => html`

    ${result.length == 0 ? html`<h2>There are no results found.</h2>` 
    : result.map(r => html`   
    <ul class="card-wrapper">
            <li class="card">
                <img src="./images/travis.jpg" alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${r.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${r.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${r.value}</span>$</p>
                ${hasUser == undefined ? nothing : html`<a class="details-btn" href="/details/${r._id}">Details</a>`}
            </li>
        </ul>`)}

        `;

export function showSearch(ctx){
    const hasUser = ctx.user;

    ctx.render(searchTemplate(hasUser, createSubmitHandler(onSearch)));

    async function onSearch(searchWord){
        const root = document.getElementById('search-container');
        const query = [...Object.values(searchWord)];

        const result = await search(query);

        render(resultTemplate(result, hasUser), root);
    };
};