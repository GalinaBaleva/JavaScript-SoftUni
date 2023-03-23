import { del, get, post, put } from "./api.js";

const endpoints = {
    'getAll': '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'albums': '/data/albums',
    'albumById': '/data/albums/',
    'searching': (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
}

export async function getAll() {
    const data = get(endpoints.getAll);
    return data;
};

export async function postAlbum(data){
    post(endpoints.albums, data);
};

export async function getById(id){
    const data = get(endpoints.albumById + id);
    return data;
};

export async function deleteAlbum(id){
   return del(endpoints.albumById + id);
};

export async function editAlbum(id, data){
    await put(endpoints.albumById + id, data);
};

export async function search(searchWord){
    return await get(endpoints.searching(searchWord));
}



