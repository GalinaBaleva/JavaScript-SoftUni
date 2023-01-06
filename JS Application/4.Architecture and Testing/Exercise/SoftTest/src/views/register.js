import { post } from "../api/api.js";
import { createSubmitHandler, setUserData } from "../util.js";

createSubmitHandler('registerView', onRegister);

const section = document.getElementById('registerView');
section.remove();

let ctx = null

export function registerView(viewFuncs){
    ctx = viewFuncs;
    ctx.render(section);
}

async function onRegister({email, password, repeatPassword}){

    if(email.length < 3){
        return alert('The email should be at least 3 characters long!');
    };

    if(password.length < 3){
        return alert('The password should be at least 3 characters long!');
    };

    if(password !== repeatPassword){
        return alert('Password don\'t match!');
    };

    const userData = await post('/users/register', {email, password});

    setUserData(userData);

    ctx.checkUserNav();
    ctx.goto('home-link');

}