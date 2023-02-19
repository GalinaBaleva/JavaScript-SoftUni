import { post } from "./api.js";

const endPoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout',
    'catalog': '/data/catalog',
    'details': '/data/catalog/'

};


//Register User (POST): http://localhost:3030/users/register
export async function postRegister(data){
    const result = await post(endPoints.register, data);
    return result;
};

export async function getLogin(data){
    const result = await get(endPoints.login, data);
    return result;
};



/*
Login User (POST): http://localhost:3030/users/login
Logout User (GET): http://localhost:3030/users/logout

Create Furniture (POST): http://localhost:3030/data/catalog
All Furniture (GET): http://localhost:3030/data/catalog
Furniture Details (GET): http://localhost:3030/data/catalog/:id  !!!don't forget ID
Update Furniture (PUT): http://localhost:3030/data/catalog/:id   !!!don't forget ID
Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id !!!don't forget ID
My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
*/