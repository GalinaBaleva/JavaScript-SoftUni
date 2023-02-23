import { getDetails } from "../data/data.js";
import { html } from "../lib.js"


export async function showDetails(ctx){
    const id = ctx.params[0];
    const data = await getDetails(id);
    ctx.render(detailsTemplate(data))
};

function detailsTemplate(data){
    const img = data.img.slice(1);
    return html`
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
                <div>
                    <a href=”#” class="btn btn-info">Edit</a>
                    <a href=”#” class="btn btn-red">Delete</a>
                </div>
            </div>
        </div>`;
};

