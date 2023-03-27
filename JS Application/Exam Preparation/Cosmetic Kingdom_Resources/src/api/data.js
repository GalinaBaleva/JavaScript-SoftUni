import { del, get, post, put } from "./api.js";

const entpoints = {
    'allProducts': '/data/products?sortBy=_createdOn%20desc',
    'getById': '/data/products/'


};


export async function getAll(){
    return get(entpoints.allProducts);
};

export async function getById(id){
    return get(entpoints.getById + id);
};

