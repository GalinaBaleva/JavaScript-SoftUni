import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/posts?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/posts/' + id);
};

export async function deleteById(id){
    return del('/data/posts/' + id);
};

export async function create(postData){
    return post('/data/posts', postData);
};

export async function edit(postData, id){
    return await put('/data/posts/' + id, postData);
};

export async function postApplication(id){
    return await post('/data/donations', { postId : id });
};

export async function allCount(postId){
    return await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
};

export async function userCount(postId, userId){
    return await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
};

export async function myPosts(userId){
    return await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
};