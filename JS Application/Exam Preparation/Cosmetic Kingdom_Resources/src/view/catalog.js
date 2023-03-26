import { html } from "../lib.js";

const catalogTemplate = () => html`
        <h2>Products</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          <div class="product">
            <img src="./images/product example 1.png" alt="example1" />
            <p class="title">
              Fond De Teint
            </p>
            <p><strong>Price:</strong><span class="price">23.99</span>$</p>
            <a class="details-btn" href="">Details</a>
          </div>
          <div class="product">
            <img src="./images/product example 2.png" alt="example1" />
            <p class="title">
            Eyeshadow Palette
            </p>
            <p><strong>Price:</strong><span class="price">19.99</span>$</p>
            <a class="details-btn" href="">Details</a>
          </div><div class="product">
            <img src="./images/product example 3.png" alt="example1" />
            <p class="title">
            Lipstick
            </p>
            <p><strong>Price:</strong><span class="price">16.99 </span>$</p>
            <a class="details-btn" href="">Details</a>
          </div>
        </section>
         <!-- Display an h2 if there are no posts -->
         <h2>No products yet.</h2>`;


export function showCatalog(ctx){
    ctx.render(catalogTemplate());

}