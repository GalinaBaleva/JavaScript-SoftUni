import { allCount, deleteById, getById, postApplication, userCount} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, event, onDelete, newApplication, allCount, usersCount) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${event.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${allCount}</span> times.</h3>
            
            <!--Edit and Delete are only for creator-->
            ${hasUser == true ? html`
            <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing}
                  
                  ${isOwner == false && usersCount < 1
                    ? html`<a @click=${newApplication} href="javescript:void(0)" id="go-btn">Going</a>` 
                    : nothing}
                </div>
              </div>`
            : nothing }
            
        </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const event = await getById(id);

    const hasUser = ctx.user;
    const doHasUser = Boolean(hasUser)
    const isOwner = doHasUser && hasUser._id == event._ownerId;

    const allCounts = await allCount(id);
    let usersCount;

    if(doHasUser){
      usersCount = await userCount(id, hasUser._id);
    };
    console.log(isOwner)

    ctx.render(detailsTemplate(doHasUser, isOwner, event, onDelete, newApplication, allCounts, usersCount));

    async function onDelete() {
        const condirmed = confirm('Are you sure?');

        if (condirmed) {
            deleteById(id);

            ctx.page.redirect('/catalog');
        };
    };

    async function newApplication(){
      await postApplication(id);

      ctx.page.redirect('/details/' + id);
    };
};