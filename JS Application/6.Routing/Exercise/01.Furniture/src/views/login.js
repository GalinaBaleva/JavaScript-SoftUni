import { html } from '../lib.js';

let page = null;

export async function showLogin(ctx) {
    page = ctx.page;
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

function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const emptiField = [...formData.values()].some(x => x == '');

    if(emptiField){
        alert('All fields are reqired!');
        return;
    };

    const data = [...formData.entries()].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1].trim() }), {});

    console.log(data);
};