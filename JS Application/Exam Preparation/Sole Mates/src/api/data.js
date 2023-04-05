import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/shoes?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/shoes/' + id);
};

export async function deleteById(id){
    return del('/data/shoes/' + id);
};

export async function createShoes(shoesData){
    return post('/data/shoes', shoesData);
};

export async function editShoes(result, id){
    return await put('/data/shoes/' + id, result);
};

export async function search(query){
    return await get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}