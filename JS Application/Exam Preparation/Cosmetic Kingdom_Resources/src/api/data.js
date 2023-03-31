import { del, get, post, put } from "./api.js";

const entpoints = {
    'allProducts': '/data/products?sortBy=_createdOn%20desc',
    'newProduct': '/data/products',
    'getById': '/data/products/'



};


export async function getAll(){
    return get(entpoints.allProducts);
};

export async function getById(id){
    return get(entpoints.getById + id);
};

export async function deleteById(id){
   return del(entpoints.getById + id);
};

export async function createNewProduct(product){
   return post(entpoints.newProduct, product);
};

export async function editProduct(product, id){
    return put(entpoints.getById + id, product);
};

