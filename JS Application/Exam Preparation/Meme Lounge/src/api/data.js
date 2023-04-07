import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/memes?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/memes/' + id);
};

export async function deleteById(id){
    return del('/data/memes/' + id);
};

export async function create(memData){
    return post('/data/memes', memData);
};

export async function edit(mem, id){
    return await put('/data/memes/' + id, mem);
};

export async function postApplication(id){
    return await post('', { offerId : id });
};


export async function myMems(userId){
    return await get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}