import { del, get, post, put } from "./api.js";


export async function getHomePage(){
    return await get('/data/games?sortBy=_createdOn%20desc&distinct=category')
};

export async function getAll(){
    return get('/data/games?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/games/' + id);
};

export async function deleteById(id){
    return del('/data/games/' + id);
};

export async function create(game){
    return post('/data/games', game);
};

export async function edit(game, id){
    return await put('/data/games/' + id, game);
};

