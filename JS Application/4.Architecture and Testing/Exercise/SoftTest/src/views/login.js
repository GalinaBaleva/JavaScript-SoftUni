import { createSubmitHandler, setUserData } from "../util.js";
import { post } from "../api/api.js"

createSubmitHandler('loginView', onLogin);

const section = document.getElementById('loginView');
section.remove();

let ctx = null;


export function loginView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
};

async function onLogin({email, password}) {
    const userData = await post('/users/login', { email, password });

    setUserData(userData);

    ctx.checkUserNav();
    ctx.goto('home-link');
};
