import { removeUserData} from '../data/util.js'
import { del, get, post } from "./api.js";

const endPoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout',
    'catalog': '/data/catalog',
    'details': '/data/catalog/',
    'me': '/users/me'
};

let ctx = null;

//Register User (POST): http://localhost:3030/users/register
export async function postRegister(data){
    const result = await post(endPoints.register, data);
    return result;
};

//Login User (POST): http://localhost:3030/users/login
export async function postLogin(data){
    const result = await post(endPoints.login, data);
    return result;
};

//Logout User (GET): http://localhost:3030/users/logout
export async function getLogout(onCtx){
    await get(endPoints.logout);
    removeUserData();
    onCtx.page.redirect('/');
};

//All Furniture (GET): http://localhost:3030/data/catalog
export async function getAllFurniture(){
    const result = await get(endPoints.catalog);
    return result;
};

//Furniture Details (GET): http://localhost:3030/data/catalog/:id  !!!don't forget ID
export async function getDetails(id){
    const result = await get(endPoints.details + id);
    return result;
};

export async function me(){
    const result = await get(endPoints.me);
    return result;
};


//Create Furniture (POST): http://localhost:3030/data/catalog
export async function creeatFurniture(body){
    const result = await post(endPoints.catalog, body);
    return result;
};

//Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id !!!don't forget ID

export async function delFurniture(id){
    const result = await del(endPoints.details + id);
};

/*
Update Furniture (PUT): http://localhost:3030/data/catalog/:id   !!!don't forget ID
My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
*/