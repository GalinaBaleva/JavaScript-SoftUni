import { showCatalogView } from './catalog.js';


export function checkUserNav() {
    const username = sessionStorage.getItem('username');
    if (username) {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'inline');
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
    } else {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'none');
    }
}


 export function onLogout(event) {
    event.preventDefault();

    const token = sessionStorage.getItem('accessToken');

    /*
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: {
                'X-Authorization': token
            }
        });
        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert(err.message);
    } finally {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('accessToken');
        checkUserNav();
        showCatalogView();
    }
    */
    fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': token
        }
    });
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    checkUserNav();
    showCatalogView();
}