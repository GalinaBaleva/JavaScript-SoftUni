import { del, get, post, put } from "./api.js";

const endpoints = {
    'catalog': '/data/albums?sortBy=_createdOn%20desc',
    'newAlbum': '/data/albums',
    'byId': '/data/albums/'
};

export async function getAll(){
    return await get(endpoints.catalog);
};

export async function postNew(data){
   return await post(endpoints.newAlbum, data);
};

export async function getById(id){
   return await get(endpoints.byId + id);
};

export async function deleteAlbum(id){
    return del(endpoints.byId + id);
};

export async function edit(data, id){
    return put(endpoints.byId + id, data);
};