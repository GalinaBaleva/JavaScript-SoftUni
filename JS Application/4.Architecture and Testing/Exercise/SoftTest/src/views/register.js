import { post } from "../api/api.js";
import { createSubmitHandler } from "../util.js";

createSubmitHandler('registerView', onRegister);

const section = document.getElementById('registerView');
section.remove();

let ctx = null

export function registerView(viewFuncs){
    ctx = viewFuncs;
    ctx.render(section);
}

function onRegister({email, password, repeatPassword}){
    let isTrue = true;

    if(email.length < 4){
        alert('The email should be at least 3 characters long!');
        isTrue = false;
    };

    if(password.length < 4){
        alert('The password should be at least 3 characters long!');
        isTrue = false;
    };

    if(password !== repeatPassword){
        alert('Password don\'t match!');
        isTrue = false;
    };
}