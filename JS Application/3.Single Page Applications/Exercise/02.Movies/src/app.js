import { toHomePage } from "./home.js";
import { onLogout } from "./logout.js";
import { onLogin } from "./login.js";
import { onRegister } from "./register.js";

const nav = document.querySelector('nav');

const moviesHome = nav.querySelector('nav a');
moviesHome.addEventListener('click', toHomePage);
const logout = nav.querySelector('#logout');
logout.addEventListener('click', onLogout);
const login = nav.querySelector('#login');
login.addEventListener('click', onLogin);
const register = nav.querySelector('#register');
register.addEventListener('click', onRegister);

function isLoged(){
               const storrige = sessionStorage.length;
               if(storrige <= 1){
                              [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'none');
                              [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'inline-block');
                              onLogin();
               } else {
                              [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'none');
                              [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'inline-block');
                              toHomePage();

               }
};
isLoged();
