import { setUserData, clearUserData } from "../util.js";
import { post, get } from "./api.js";

export async function login(email, password){
    const {_id, email: returnedEmail, accessToken, username} = await post('/users/login', { email, password});
    
    setUserData({
        _id,
        username,
        email: returnedEmail,
        accessToken
    });
};

export async function register(data){
    const {_id, email: returnedEmail, accessToken} = await post('/users/register', data);
    
    setUserData({
        _id,
        username,
        email: returnedEmail,
        accessToken
    });
};

export async function logout(){
    get('/users/logout');

    clearUserData();
};

