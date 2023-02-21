import { postLogin } from '../data/data.js';
import { setUserData } from '../data/util.js';
import { html } from '../lib.js';

let ctx = null;

export async function showLogin(onCtx) {
    ctx = onCtx;
    ctx.render(loginTamplate);
};

const loginTamplate = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>`;

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emptiField = [...formData.values()].some(x => x == '');

    if (emptiField) {
        alert('All fields are reqired!');
        return;
    };

    const data = [...formData.entries()].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1].trim() }), {});

    const response = await postLogin(data);
    setUserData(response);
    
    ctx.page.redirect('/');
};