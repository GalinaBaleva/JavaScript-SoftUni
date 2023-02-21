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
                <img src="/images/chair.jpg" />
                <p>${item.descriprion}</p>
                <footer>
                    <p>Price: <span>55 $</span></p>
                </footer>
                <div>
                    <a href=”#” class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
    </div>
`;