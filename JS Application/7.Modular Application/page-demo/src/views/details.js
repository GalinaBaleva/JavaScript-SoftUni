import { html, until } from "../lib.js";
import { getById } from "../data/recipes.js";

const asyncTemplate = (recipePromise) => html`
${until(recipePromise, recipeSkeleton())}`;

const detailsTemplate = (recipe) => html`
<h2>${recipe.name}</h2>
<img src=${'/' + recipe.img}>
<h3>Ingredients</h3>
<ul>
    ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
</ul>
<h3>Preparation Steps</h3>
<ul>
    ${recipe.steps.map(s => html`<li>${s}</li>`)}
</ul>`;

const recipeSkeleton = () => html`
<h2>Recipe Detail</h2>
<h3>Ingredients</h3>
<ul>
    Loding &hellip;
</ul>
<h3>Prepatarion Step</h3>
<ul>
    Loding &hellip;
</ul>`;

export function showDetails(ctx) {
    const id = ctx.params.id;
    ctx.render(until(loadRecipe(id), asyncTemplate()))
};

async function loadRecipe(id) {
    const recipe = await getById(id);
    return detailsTemplate(recipe);
};