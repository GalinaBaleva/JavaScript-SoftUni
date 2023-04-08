import { allComments, deleteById, getById, newComment } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const detailsTemplate = (hasUser, isOwner, game, onDelete, comments, postNewComment) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${game.imageUrl}" />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">${game.summary}</p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                ${comments.length == 0
        ? html`<p class="no-comment">No comments.</p>`
        : html`<ul>
                            ${comments.map(c => html`
                       <li class="comment">
                           <p>${c.comment}</p>
                       </li>`)}
                        </ul>`} 
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${hasUser && isOwner ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>` : nothing}
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${!hasUser || isOwner ? nothing : html`
             <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${postNewComment} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`}
           

        </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const game = await getById(id);

    const hasUser = ctx.user;
    const isOwner = hasUser && hasUser._id == game._ownerId;

    const comments = await allComments(id);
    console.log(comments)


    ctx.render(detailsTemplate(hasUser, isOwner, game, onDelete, comments, createSubmitHandler(postNewComment)));

    async function onDelete() {
        const condirmed = confirm('Are you sure?');

        if (condirmed) {
            deleteById(id);

            ctx.page.redirect('/catalog');
        };
    };

    async function postNewComment(data, form) {
        const newData = [...Object.values(data)].map(d => d.trim());

        if(newData.some(d => d == '')){
            return alert('Comment field is required!');
        };

        const result = {
            comment: newData[0],
            gameId: id
        }

        await newComment(result);
        form.reset();
        ctx.page.redirect('/details/' + id);
    };
};