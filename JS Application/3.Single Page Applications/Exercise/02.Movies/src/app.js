import { toHomePage } from "./home.js";
import { onLogout } from "./logout.js";
import { onLogin } from "./login.js";
import { onRegister } from "./register.js";

const nav = document.querySelector('nav');

const moviesHome = nav.querySelector('#home');
moviesHome.addEventListener('click', isLoged);
const logout = nav.querySelector('#logout');
logout.addEventListener('click', onLogout);
const login = nav.querySelector('#login');
login.addEventListener('click', onLogin);
const register = nav.querySelector('#register');
register.addEventListener('click', onRegister);
const welcome = nav.querySelector('#welcome-msg strong');

const storrige = JSON.parse(sessionStorage.getItem('userData'));

function isLoged(event){
               if(event){
                              event.preventDefault();
               }
               if(storrige != undefined){
                              user();
               } else {
                              guest();
               }
}

function guest(){
               [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'none');
               [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'inline-block');
               onLogin();
};

function user(){
               [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'none');
               [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'inline-block');
               welcome.textContent = storrige.email;
               toHomePage();
};

isLoged();
