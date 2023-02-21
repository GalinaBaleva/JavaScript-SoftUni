import { html, render } from "../lib.js";


const root = document.querySelector('nav');

export function checkUserNav() {
    const token = sessionStorage.getItem('accessToken');
    let user = '';
    if (token) {
        user = html`
                    <a id="catalogLink" href="/" class="active">Dashboard</a>
                    <div id="user">
                        <a id="createLink" href="create.html">Create Furniture</a>
                        <a id="logoutBtn" href="javascript:void(0">Logout</a>
                    </div>`;
    } else {
        user = html`
        <div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div>`;
    };

    render(user, root);
};