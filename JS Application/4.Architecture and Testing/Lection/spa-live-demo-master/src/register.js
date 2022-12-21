const section = document.getElementById('register-view');
section.remove();

export function showRegisterView() {
    document.querySelector('main').appendChild(section);
}

