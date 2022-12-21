// get information about single recipe by id
// display all information about recipe

const section = document.getElementById('details-view');
section.remove();

export async function showDetailsView(id) {
    const recipe = await getById(id);
    
    document.querySelector('main').appendChild(section);

    displayRecipe(recipe);
}


async function getById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function displayRecipe(recipe) {
    document.getElementById('recipe-name').textContent = recipe.name;

    const ingredientsFragment = document.createDocumentFragment();
    for (let item of recipe.ingredients) {
        const element = document.createElement('li');
        element.textContent = item;
        ingredientsFragment.appendChild(element);
    }
    document.getElementById('recipe-ingredients').replaceChildren(ingredientsFragment);

    const stepsFragment = document.createDocumentFragment();
    for (let item of recipe.steps) {
        const element = document.createElement('li');
        element.textContent = item;
        stepsFragment.appendChild(element);
    }
    document.getElementById('recipe-steps').replaceChildren(stepsFragment);
}

