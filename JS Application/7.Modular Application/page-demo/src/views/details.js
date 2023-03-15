import { html, nothing, until } from "../lib.js";
import { getById } from "../data/recipes.js";
import { getLikesByRecipeId } from "./liks.js";

const asyncTemplate = (recipePromise) => html`
${until(recipePromise, recipeSkeleton())}`;

const detailsTemplate = (recipe, likes, canLike) => html`
<h2>${recipe.name}</h2>
<div>
${canLike ? html`<a href='javascript:void(0)'>Like</a>` : nothing}
${likes} like${likes == 1 ? '' : 's'}
</div>
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
    const user = ctx.user;
    let userId;

    if(user){
        userId = user._id;
    }

    ctx.render(until(loadRecipe(id, userId), asyncTemplate()))
};

async function loadRecipe(id, userId) {
    const { likes , canLike } = await getLikesByRecipeId(id, userId);

    const recipe = await getById(id);
    return detailsTemplate(recipe, likes, canLike);
};