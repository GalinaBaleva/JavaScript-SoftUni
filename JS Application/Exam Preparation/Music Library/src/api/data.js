import { del, get, post, put } from "./api.js";

const endpoints = {
    'catalog': '/data/albums?sortBy=_createdOn%20desc',
    'newAlbum': '/data/albums',
    'byId': '/data/albums/',
    'likes': '/data/likes',
    'allLikes': '/data/likes?where=albumId%3D%22',
    'userLike': '/data/likes?where=albumId%3D%22'
};

export async function getAll() {
    return await get(endpoints.catalog);
};

export async function postNew(data) {
    return await post(endpoints.newAlbum, data);
};

export async function getById(id) {
    return await get(endpoints.byId + id);
};

export async function deleteAlbum(id) {
    return del(endpoints.byId + id);
};

export async function edit(data, id) {
    return put(endpoints.byId + id, data);
};

export async function like(id) {
    return await post(endpoints.likes, { albumId: id });
};

export async function getAllLikes(albumId){
   return await get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
};

export async function getUserLike(userId, albumId){
    return await get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
};