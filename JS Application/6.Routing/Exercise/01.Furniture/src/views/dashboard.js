import { html, repeat } from '../lib.js';
import { getAllFurniture } from '../data/data.js';


export async function showDashboard(ctx) {
    const furnitures = await getAllFurniture();
    ctx.render(dashboardTemplate(furnitures));
}

const dashboardTemplate = (furnitures) =>
    html`        
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${repeat(furnitures, f => f._id, cardTemplate)}
    </div>`;

const cardTemplate = (item) => html`      
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" id=${item._id} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
    </div>
`;