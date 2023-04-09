import { setUserData, clearUserData } from "../util.js";
import { post, get } from "./api.js";

export async function login(email, password){
    const {_id, email: returnedEmail, accessToken} = await post('/users/login', { email, password});
    
    setUserData({
        _id,
        email: returnedEmail,
        accessToken
    });
};

export async function register(email, password){
    const {_id, email: returnedEmail, accessToken} = await post('/users/register', { email, password});
    
    setUserData({
        _id,
        email: returnedEmail,
        accessToken
    });
};

export async function logout(){
    get('/users/logout');

    clearUserData();
};

