import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
     <section id="loginaPage">
            <form @submit=${onLogin} class="loginForm">
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>`;

export function showLogin(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin(data){
        const dataValues = [...Object.values(data)].map(d => d.trim());

        const result = {
            email:  dataValues[0],
            password: dataValues[1]
        };

        if(result.email == '' || result.password == ''){
            return alert('All fields are required!');
        };

        await login(result.email, result.password);

        ctx.updateNav();
        ctx.page.redirect('/');
    };
};