import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/offers?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/offers/' + id);
};

export async function deleteById(id){
    return del('/data/offers/' + id);
};

export async function create(jobData){
    return post('/data/offers', jobData);
};

export async function edit(jobData, id){
    return await put('/data/offers/' + id, jobData);
};

export async function postApplication(id){
    return await post('/data/applications', { offerId : id });
};

export async function allCount(offerId){
    return await get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
};

export async function userCount(offerId, userId){
    return await get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}