import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
        <section id="login-page" class="auth">
            <form @submit=${onLogin} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin(data) {
        const dataValues = [...Object.values(data)].map(d => d.trim());

        const result = {
            email: dataValues[0],
            password: dataValues[1]
        };

        if (result.email == '' || result.password == '') {
            return alert('All fields are required!');
        };

        await login(result.email, result.password);

        ctx.updateNav();
        ctx.page.redirect('/');
    };
};