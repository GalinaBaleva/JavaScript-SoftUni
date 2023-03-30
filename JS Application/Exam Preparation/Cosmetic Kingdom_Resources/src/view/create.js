import { createNewProduct } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
        <section id="create">
            <div class="form">
                <h2>Add Product</h2>
                <form @submit=${onCreate} class="create-form">
                    <input type="text" name="name" id="name" placeholder="Product Name" />
                    <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                    <input type="text" name="category" id="product-category" placeholder="Category" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="5"
                        cols="50"></textarea>
        
                    <input type="text" name="price" id="product-price" placeholder="Price" />
        
                    <button type="submit">Add</button>
                </form>
            </div>
        </section>`;

export async function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form) {
        if ([...Object.values(data)].some(e => e == '')) {
            return alert('All field are required!');
        };

        const product = [...Object.entries(data)].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1].trim() }), {});


        await createNewProduct(product);
        form.reset();
        ctx.page.redirect('/catalog')

    };
}