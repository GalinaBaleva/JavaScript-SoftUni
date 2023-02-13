import { html, render } from "../lib.js";

const root = document.querySelector('nav');

export function checkUserNav() {
    const token = sessionStorage.getItem('userData');
    let user = '';
    if (token) {
        user = html`
                    <a id="catalogLink" href="index.html" class="active">Dashboard</a>
                    <div id="user">
                        <a id="createLink" href="create.html">Create Furniture</a>
                        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
                    </div>`;
    } else {
        user = html`
        <div id="guest">
            <a id="loginLink" href="login.html">Login</a>
            <a id="registerLink" href="register.html">Register</a>
        </div>`;
    };

    render(user, root);
};