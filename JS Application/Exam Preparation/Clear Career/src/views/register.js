import { html } from "../lib.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`        
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form @submit=${onRegister} class="login-form">
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <a href="#">Login</a></p>
                </form>
            </div>
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
