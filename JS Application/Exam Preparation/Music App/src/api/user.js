import { clearUserData, setUserData } from "../util.js";
import { get, post } from '../api/api.js';

export async function login(email, password) {
    const { _id, email: returnedEmail, accessToken } = await post('/users/login', { email, password });

    setUserData({
        _id,
        email: returnedEmail,
        accessToken
    });
};

export async function register(emal, password) {
    const { _id, email: returnedEmail, accessToken } = await post('/users/register', { emal, password });

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