import { html } from "../lib.js";
import { getAll } from "../api/data.js";

const homeTemplate = (posts) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            ${posts.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
            : posts.map(p => html`
            <div class="all-posts">
                <div class="post">
                    <h2 class="post-title">${p.title}</h2>
                    <img class="post-image" src="${p.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${p._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
            </div>`)}         
        </section>`;

export async function showHome(ctx){
    const posts = await getAll();
    console.log(posts)
    
    ctx.render(homeTemplate(posts));
}