// register event listeners to navigation
// switch view
// handle form submit
// send login information to REST service
// store authorization token

import { checkUserNav } from './auth.js';
import { showCatalogView } from './catalog.js';

document.getElementById('login-form').addEventListener('submit', onLogin);

const section = document.getElementById('login-view');
section.remove();

export function showLoginView() {
    document.querySelector('main').appendChild(section);
}

async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    try {
        await request(email, password);

        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('accessToken', data.accessToken);

        checkUserNav();
        showCatalogView();
    } catch (err) {
        alert(err.message);
    }
}

async function login(email, password) {
    const response = await fetch(, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();

}
