import { showDetails } from './details.js';

const homeView = document.getElementById('homeView');
homeView.remove();
const main = document.getElementsByTagName('main')[0];

homeView.querySelector('h2').addEventListener('click', showDetails);


const form = homeView.querySelector('form');
form.addEventListener('submit', onSubmit);

homeView.querySelector('[name="cancel"]').addEventListener('click', onClearForm);


export function showHome(ev) {
               ev?.preventDefault();
               main.replaceChildren(homeView);
};

async function onSubmit(ev) {
               ev.preventDefault();
               const formData = new FormData(form);

               const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, {[key]: value.trim()}), {});
               const someDataIsMissing = Object.values(body).some(x => x === '');

               try {

                              if(someDataIsMissing == true){
                                             throw new Error(`All fields are required!`)
                              };
                              
                              const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
                                             method: 'post',
                                             'Content-Type': 'application/json',
                                             body: JSON.stringify(body)
                              });

                              if(res.ok != true){
                                             const error = res.json();
                                             throw new Error(error.message);
                              };

                              const data = res.json();
                              console.log(data)

               } catch (error){
                              alert(error.message);
                              return
               };
               



};

function onClearForm(ev) {
               form.reset();
};