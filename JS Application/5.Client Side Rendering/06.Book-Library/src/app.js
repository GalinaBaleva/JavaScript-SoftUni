import { html, render } from '../node_modules/lit-html/lit-html.js';
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { get } from "./api.js";
import { addFrom } from './addBook.js';
import { onEdit } from './editBook.js';

const root = document.querySelector('body');

loadingContent();

async function loadingContent() {
    const data = await get('/jsonstore/collections/books');

    const main = html`
        <button id="loadBooks">LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
        
            <tbody>
                ${repeat(Object.entries(data), book => book[0], book => html`
                <tr>
                    <td>${book[1].author}</td>
                    <td>${book[1].title}</td>
                    <td>
                        <button @click=${onEdit.bind(null, book[0])}>Edit</button>
                        <button @click=${onDelete.bind(null, book[0])}>Delete</button>
                    </td>
                </tr>`)}
            </tbody>
        </table>
        
        ${addFrom()}`;
    render(main, root);
}

function onDelete(event){
    console.log(event);
}
