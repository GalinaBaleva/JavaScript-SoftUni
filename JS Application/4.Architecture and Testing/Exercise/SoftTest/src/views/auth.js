export function checkUserNav() {
    const tocken = sessionStorage.getItem('userData');
    if (tocken) {
        [...document.querySelectorAll('.guest')].forEach(s => s.style.dispaly = 'none');
        [...document.querySelectorAll('.user')].forEach(s => s.style.display = 'inline-block');
    } else {
        [...document.querySelectorAll('.user')].forEach(s => s.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(s => s.style.dispaly = 'inline-block');
    }
}


export function onLogout(ctx) {

};

