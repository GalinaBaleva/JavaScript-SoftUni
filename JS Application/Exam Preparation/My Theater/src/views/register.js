import { html } from "../lib.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`        
        <section id="registerPage">
            <form @submit=${onRegister} class="registerForm">
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>`;

export async function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        const dataValues = [...Object.values(data)].map(d => d.trim());

        const result = {
            email: dataValues[0],
            password: dataValues[1],
            repass: dataValues[2]
        };

        if (dataValues.some(d => d == '')) {
            return alert('All field are required!');
        };

        if (result.password != result.repass) {
            return alert(`The password doesn\'t match!`);
        };

        await register(result.email, result.password);

        ctx.updateNav();
        ctx.page.redirect('/');
    };
};
