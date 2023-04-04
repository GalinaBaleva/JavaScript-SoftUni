import { get, post } from "./api.js";

const endpoints = {
    'catalog': '/data/albums?sortBy=_createdOn%20desc',
    'newAlbum': '/data/albums'
};

export async function getAll(){
    return await get(endpoints.catalog);
};

export async function postNew(data){
   return await post(endpoints.newAlbum, data);
};