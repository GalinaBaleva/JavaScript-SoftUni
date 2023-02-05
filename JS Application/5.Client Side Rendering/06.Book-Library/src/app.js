import { html, render } from '../node_modules/lit-html/lit-html.js';
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { del, get } from "./api.js";
import { addForm } from './frorms.js';



loadingContent();

async function loadingContent() {
    const root = document.querySelector('body');


    const main = html`
        <button id="loadBooks" @click=${onLoad}>LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
        
            <tbody>
        
            </tbody>
        </table>
        ${await addForm()}
        `;
    render(main, root);
};

async function onLoad() {
    const root = document.querySelector('tbody');
    const data = await get('/jsonstore/collections/books');

    const books = html`
    ${repeat(Object.entries(data), book => book[0], book => html`
    <tr>
        <td>${book[1].author}</td>
        <td>${book[1].title}</td>
        <td>
            <button @click=${onEdit.bind(null, book[0])}>Edit</button>
            <button @click=${onDelete.bind(null, book[0])}>Delete</button>
        </td>
    </tr>`)}`
    render(books, root)
    
}

async function onEdit(event) {
    await addForm(event)
};

async function onDelete(id) {
    del(`/jsonstore/collections/books/${id}`);
    loadingContent();
}