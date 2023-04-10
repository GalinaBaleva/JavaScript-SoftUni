import { del, get, post, put } from "./api.js";


export async function getHomePage(){
    return await get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
};

export async function getAll(){
    return get('');
};

export async function getById(id){
    return get('' + id);
};

export async function deleteById(id){
    return del('' + id);
};

export async function create(jobData){
    return post('', jobData);
};

export async function edit(jobData, id){
    return await put('' + id, jobData);
};

export async function postApplication(id){
    return await post('', { offerId : id });
};

export async function allCount(offerId){
    return await get(``);
};

export async function userCount(offerId, userId){
    return await get(``);
}