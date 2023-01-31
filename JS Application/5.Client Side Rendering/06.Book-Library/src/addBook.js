import { html, render } from '../node_modules/lit-html/lit-html.js';

export function addFrom(){
    const form = html`
            <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit">
        </form>`;
        return form;
}