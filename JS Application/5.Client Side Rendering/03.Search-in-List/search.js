import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const townsRoot = document.getElementById('towns');
const resultRoot = document.getElementById('result');


const surchedTown = document.getElementById('searchText');
const button = document.querySelector('button');
button.addEventListener('click', onClick);


search();

function loadTowns(surchedTown) {
   return html`
   <ul>
      ${towns.map(town => html`
      <li class="${(surchedTown && town.includes(surchedTown)) ? " active" : ""}">${town}</li>
      `)}
   </ul>`;
};

function search(surchedTown) {
   render(loadTowns(surchedTown), townsRoot)
};

function onClick() {
   search(surchedTown.value);
   render(result(), resultRoot);
};

function result() {
   const matches = document.querySelectorAll('.active');
   return html`<p>${matches ? `${matches.length} matches found` : ""}</p>`;
};