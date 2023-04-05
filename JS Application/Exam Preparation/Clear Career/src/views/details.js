import { allCount, deleteById, getById, postApplication, userCount} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, job, onDelete, newApplication, allCount, usersCount) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${job.imageUrl}" alt="example1" />
            <p id="details-title">${job.title}</p>
            <p id="details-category">
              Category: <span id="categories">${job.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${job.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${job.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${job.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">${allCount}</strong></p>
            <div id="action-buttons"></div>
            ${isOwner 
                ? html`
              <a href="/edit/${job._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : nothing }
            ${hasUser && !isOwner && usersCount < 1 ? html`<a @click=${newApplication} href="javascript:void(0)" id="apply-btn">Apply</a>` : nothing}
            </div>
          </div>
        </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const job = await getById(id);

    const hasUser = ctx.user;
    const isOwner = hasUser && hasUser._id == job._ownerId;

    const allCounts = await allCount(id);
    let usersCount;

    if(hasUser){
      usersCount = await userCount(id, hasUser._id);
    };


    ctx.render(detailsTemplate(hasUser, isOwner, job, onDelete, newApplication, allCounts, usersCount));

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