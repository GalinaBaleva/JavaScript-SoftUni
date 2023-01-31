import { html, render } from '../node_modules/lit-html/lit-html.js';
import {} from '../node_modules/lit-html/directives/repeat.js';
import { get } from "./api.js";

const root = document.querySelector('body');

loadingContent();
async function loadingContent(){
    const data = await get('/jsonstore/collections/books');
    console.log(data);
}
