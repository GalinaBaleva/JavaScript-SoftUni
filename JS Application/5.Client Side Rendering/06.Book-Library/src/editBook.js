import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get, put } from './api.js';

export async function onEdit(id) {

    const data = await get('/jsonstore/collections/books/'+id)

    const form = html`
                    <form id="edit-form">
                        <input type="hidden" name="id">
                        <h3>Edit book</h3>
                        <label>TITLE</label>
                        <input type="text" name="title" placeholder="Title..." value=${data.title}>
                        <label>AUTHOR</label>
                        <input type="text" name="author" placeholder="Author..." value=${data.author}>
                        <input type="submit" value="Save" @click=${onSubmit(event)}> //not finished
                    </form>`;
    
};

async function onSubmit(event){
    console.log(event)

}