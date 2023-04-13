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

export async function postNew(producId){
    return await post('/data/bought', producId);
};

export async function totalBought(productId){
    return await get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
};

export async function userBought(productId, userId){
    return await get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
};

