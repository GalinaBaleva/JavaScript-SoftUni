import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const townsRoot = document.getElementById('towns');
const resultRoot = document.getElementById('result');

const surchedTown = document.getElementById('searchText');
const button = document.querySelector('button');
button.addEventListener('click', search);


function loadTowns(match){
   return html`
   <ul>
      ${towns.map(town => html`
         <li class="${(match && town.includes(match)) ? "active" : ""}">${town}</li>
      `)}
   </ul>`;
};

function search() {
   render(loadTowns(surchedTown), townsRoot)
};
