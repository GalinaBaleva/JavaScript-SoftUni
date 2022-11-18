import { viewSection } from "./util.js";
import { toHomePage } from "./home.js";

const loginSection = document.getElementById('form-login');
loginSection.remove()

const form = loginSection.querySelector('form');
form.addEventListener('submit', onSubmit);

export function onLogin(event) {
               if (event !== undefined) {
                              event.preventDefault();
               };
               viewSection(loginSection);
};

async function onSubmit(event) {
               event.preventDefault();

               const formData = new FormData(event.target);

               try {
                              const someField = [...formData.values()].some(x => x == '');
                              if(someField == true){
                                             throw new Error(`All fields are required!`)
                              };

                              const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, {[key]:value.trim()}), {});
                              const res = await fetch('http://localhost:3030/users/login', {
                                             'method': 'post',
                                             'header': {
                                                            'Content-Type':'application/json'
                                             },
                                             body: JSON.stringify(body)
                              });
                              if(res.ok != true){
                                             const error = await res.json();
                                             throw new Error(error.message);
                              };

                              const data = await res.json();

                              sessionStorage.setItem('userData', JSON.stringify(data));

                              window.location = '/';
               } catch (error) {
                              alert(error.message);
               }

}