import { allCount, deleteById, getById, postApplication, userCount } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, post, onDelete, onDonate, allCount, usersCount) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${post.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">Description: ${post.description}</p>
                        <p class="post-address">Address: ${post.address}</p>
                        <p class="post-number">Phone number: ${post.phone}</p>
                        <p class="donate-Item">Donate Materials: ${allCount}</p>

                        <!--Edit and Delete are only for creator-->
                        <div class="btns">
                        ${isOwner
                            ? html`  <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                            : nothing}
                        ${hasUser && !isOwner && usersCount < 1 
                            ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>` 
                            : nothing}                            
                        </div>

                    </div>
                </div>
            </div>
        </section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const post = await getById(id);

  const hasUser = ctx.user;
  const isOwner = hasUser && hasUser._id == post._ownerId;

  const allCounts = await allCount(id);
  let usersCount;

  if (hasUser) {
    usersCount = await userCount(id, hasUser._id);
  };


  ctx.render(detailsTemplate(hasUser, isOwner, post, onDelete, onDonate, allCounts, usersCount));

  async function onDelete() {
    const condirmed = confirm('Are you sure?');

    if (condirmed) {
      deleteById(id);

      ctx.page.redirect('/catalog');
    };
  };

  async function onDonate() {
    await postApplication(id);

    ctx.page.redirect('/details/' + id);
  };
};