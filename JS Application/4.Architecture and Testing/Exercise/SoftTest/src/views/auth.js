export function checkUserNav() {
    const tocken = sessionStorage.getItem('accessToken');
    if (tocken) {
        [...document.querySelectorAll('.guest')].forEach(i => i.parentElement.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.parentElement.style.display = 'inline');
    } else {
        [...document.querySelectorAll('.user')].forEach(i => i.parentElement.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(i => i.parentElement.style.display = 'inline');
    }
}


export function onLogout(ctx) {

};

