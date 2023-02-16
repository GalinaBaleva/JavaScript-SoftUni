import { postRegister } from "../data/data.js";
import { html } from "../lib.js";


export async function showRegister(ctx) {
    ctx.render(registerTemplate);

};

const registerTemplate = html`  
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
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
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit"  class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
</div>`;

async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const emptiField = [...formData.values()].some(x => x == '');

    if(emptiField){
        alert('All fields are reqired!');
        return;
    };

    const data = [...formData.entries()].reduce((acc, curent) => Object.assign(acc, {[curent[0]]: curent[1].trim()}), {});


    if(data.password !== data.rePass){
        alert('Password doesn\'t match!');
        return;
    };
    
    const response = await postRegister(data);

    console.log(response)

};