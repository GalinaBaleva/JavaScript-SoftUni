import { myMems } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const myPageTemplate = (user, my) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${my.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${my.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
        : my.map(m => html`<div class="user-meme">
                    <p class="user-meme-title">${m.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${m.imageUrl}">
                    <a class="button" href="/details/${m._id}">Details</a>
                </div>`)}
            </div>
        </section>`;

export async function showUserProfile(ctx) {
    const user = getUserData();
    const my = await myMems(user._id)

    ctx.render(myPageTemplate(user, my));
}