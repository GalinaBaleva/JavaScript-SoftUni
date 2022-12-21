import { showDetailsView } from './details.js';


// get data from REST service
// parse and display each recipe

document.getElementById('recipe-list').addEventListener('click', openRecipe);
document.getElementById('catalog-link').addEventListener('click', showCatalogView);

const section = document.getElementById('catalog-view');
section.remove();

export async function showCatalogView() { 
    const recipes = await getAllRecipes();
    
    document.querySelector('main').appendChild(section);
    
    document.getElementById('catalog-view').style.display = 'block';

    displayRecipes(recipes);


}

async function getAllRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name'));
    const recipes = await response.json();

    return recipes;
}

function displayRecipes(recipes) {
    const cards = recipes.map(createRecipeCard);

    const fragment = document.createDocumentFragment();
    for (let item of cards) {
        fragment.appendChild(item);
    }

    const list = document.getElementById('recipe-list');
    list.replaceChildren(fragment);
}

function createRecipeCard(recipe) {
    const element = document.createElement('li');
    element.textContent = recipe.name;

    const link = document.createElement('a');
    link.href = 'javascript:void(0)';
    link.text = '[Details]';
    link.id = recipe._id;
    element.appendChild(link);

    return element;
}

function openRecipe(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.id;
        showDetailsView(id);
    }
}



