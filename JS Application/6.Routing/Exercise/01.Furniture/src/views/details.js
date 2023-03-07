import { delFurniture, getDetails, me, updateFurniture} from "../data/data.js";
import { html } from "../lib.js";
import { editViewTemplate } from "./edit.js";

let ctx = null;

export async function showDetails(onCtx) {
    ctx = onCtx;
    const id = ctx.params[0];
    const data = await getDetails(id);
    ctx.render(await detailsTemplate(data));
};

async function detailsTemplate(data) {
    const img = data.img.slice(1);

    const user = await me();

    let isUser = null;

    if (user._id === data._ownerId) {
        isUser = true;
    } else {
        isUser = false;
    };

    const result = html`
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Furniture Details</h1>
                </div>
            </div>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src=${img} />
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p>Make: <span>${data.make}</span></p>
                    <p>Model: <span>${data.model}</span></p>
                    <p>Year: <span>${data.year}</span></p>
                    <p>Description: <span>${data.description}</span></p>
                    <p>Price: <span>${data.price}</span></p>
                    <p>Material: <span>${data.material}</span></p>
                    <div>${isUser === true ? html`
                        <a href=”#” class="btn btn-info" data-id=${data._id} @click=${editCardContent}>Edit</a>
                        <a href=”#” class="btn btn-red" data-id=${data._id} @click=${deleteFurniture}>Delete</a>` : ''}
                    </div>
                </div>
            </div>`;

    return result;
};

export async function editCardContent(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const data = await updateFurniture(id);

   ctx.render(editViewTemplate(ctx, data))
};

function deleteFurniture(e){
    e.preventDefault();
    const id = e.target.dataset.id;
    delFurniture(id);
    ctx.page.redirect('/');
};