import { viewSection } from "./util.js";

const addSection = document.getElementById('add-movie');
addSection.remove();

const form = addSection.querySelector('form');
form.addEventListener('submit', onsubmit);

export function onAdding(event){
               event.preventDefault();
               viewSection(addSection);
};

async function onsubmit(event){
               event.preventDefault();
               const formData = new FormData(event.target);
               const some = [...formData.values()].some(x => x == '');

               try {
                              if (some == true) {
                                             throw new Error(`All fields are required!`);
                              };
                              const stor = JSON.parse(sessionStorage.getItem('userData'));
                              const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }), {});
                              body._ownerId = stor.id;



                              const res = await fetch('http://localhost:3030/data/movies', {
                                             method: 'post',
                                             headers: {
                                                            'Content-Type': 'appliction/json',
                                                            'X-Authorization': stor.accessToken
                                             },
                                             body: JSON.stringify(body)
                              });

                              if (res.ok != true) {
                                             const error = await res.json();
                                             throw new Error(error.message);
                              };

                              const data = await res.json();

                              window.location = '/';

               } catch (error) {
                              alert(error.message)
               }
}