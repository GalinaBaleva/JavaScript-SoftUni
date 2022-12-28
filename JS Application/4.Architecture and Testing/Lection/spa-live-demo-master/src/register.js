import { setUserData, createSubmitHandler } from "./util.js";
import { post } from "./api.js";

createSubmitHandler('register-view', onRegister);

const section = document.getElementById('register-view');
section.remove();

let ctx = null;

export function showRegisterView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onRegister({email, username, password, repass}) {
        if (password != repass) {
            return alert('Password don\'t match!');
        };

        const userData = await post('/users/register', { email, username, password });

        setUserData(userData);

        ctx.checkUserNav();
        ctx.goto('catalog-link');
}