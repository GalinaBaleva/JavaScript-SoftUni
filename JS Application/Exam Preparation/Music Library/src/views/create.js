import { postNew } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
      <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`;

export function showCreate(ctx){
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form){
        const some = [...Object.values(data)].some(d => d == '');

        if(some){
            return alert('All fields are required!');
        };

        const result = [...Object.entries(data)].reduce((acc, curent) => Object.assign(acc, {[curent[0]]: curent[1]}), {});
        
        await postNew(result);
        form.reset();
        ctx.page.redirect('/catalog');

    };
};