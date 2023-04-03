import { setUserData } from "../util.js";
import { post } from "./api.js";

export async function register(email, password) {
    const { _id, email: returnedEmail, accessToken } = await post('/users/register', { email, password });
    setUserData({
        _id,
        email: returnedEmail,
        accessToken
    });
};
