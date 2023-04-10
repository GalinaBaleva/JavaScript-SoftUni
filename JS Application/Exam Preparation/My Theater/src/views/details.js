import { allCount, deleteById, getById, postApplication, userCount} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (hasUser, isOwner, job, onDelete, newApplication, allCount, usersCount) => html`
`;

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