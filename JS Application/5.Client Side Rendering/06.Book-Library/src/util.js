import { post } from "./api.js";

export async function createBook(event){
    event.preventDefault();
    const form = new FormData(event.target);

    const body = [...form.entries()].reduce((acc, current) => Object.assign(acc,{[current[0]]: current[1].trim()}), {});

    const data = await post('/jsonstore/collections/books/', body);

    console.log(data);
    event.target.reset();
}