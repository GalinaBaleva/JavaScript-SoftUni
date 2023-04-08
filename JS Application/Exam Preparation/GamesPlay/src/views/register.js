import { html } from "../lib.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`        
        <section id="register-page" class="content auth">
            <form @submit=${onRegister} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
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
