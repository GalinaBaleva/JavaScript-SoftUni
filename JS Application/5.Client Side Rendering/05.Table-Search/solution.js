import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';


const url = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

async function loadingStudents(data, searchedText) {



}



function onClick(event) {
   const searchField = event.target.parentElement.querySelector('#searchField').value;
   console.log(serchField)

}


async function request() {
   const resp = await fetch(url, 'GET');
   const data = await resp.json();

   return data;
};


