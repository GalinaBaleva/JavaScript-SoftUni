import { getAll, myPosts } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (posts) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            ${posts.length == 0 
            ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
        : posts.map(p => html`
                    <div class="my-posts">
                <div class="post">
                    <h2 class="post-title">${p.title}</h2>
                    <img class="post-image" src="${p.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${p._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`)}   
        </section>`;

export async function showMy(ctx){
    const user = ctx.user;
    const my = await myPosts(user._id);

    ctx.render(catalogTemplate(my));
};