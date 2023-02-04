import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get,} from './api.js';


export async function addForm(id) {
    const data = id ? await get('/jsonstore/collections/books/' + id) : "";

    if (data.length != 0) {
        const editForm = html`
                    <form id="edit-form">
                        <input type="hidden" name="id">
                        <h3>Edit book</h3>
                        <label>TITLE</label>
                        <input type="text" name="title" placeholder="Title..." value=${data.title}>
                        <label>AUTHOR</label>
                        <input type="text" name="author" placeholder="Author..." value=${data.author}>
                        <input type="submit" value="Save">
                    </form>`;
        return editForm;
    } else {
        const addForm = html`
        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit">
        </form>`;
        return addForm;
    }
};

