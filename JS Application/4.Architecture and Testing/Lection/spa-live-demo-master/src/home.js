const section = document.getElementById('home-view');
section.remove();

export function showHomeView(){
    document.querySelector('main').appendChild(section);
}