import { viewSection } from "./util.js";

let editSection = document.getElementById('edit-movie');
editSection.remove();

let form = editSection.querySelector('form');
form.addEventListener('submit', onSubmit);

const stor = JSON.parse(sessionStorage.getItem('userData'));

export async function onEdit(event){
               event.preventDefault();

               const id = event.target.parentElement.parentElement.id;
               
               const res = await fetch(`http://localhost:3030/data/movies/${id}`, {
                              method: 'get',
                              headers: {
                                             'Content-Type': 'application/json',
                                             'X-Authorization': stor.accessToken
                              }
               });

               const data = await res.json();

               let [title, description, img] = editSection.querySelectorAll('.form-control');

               title.value = data.title;
               description.value= data.description;
               img.value = data.img;

               form.setAttribute('id', data._id);

               viewSection(editSection);

};

async function onSubmit(event){
               event.preventDefault();
               const id = event.target.id;
               
               const formData = new FormData(event.target);
               const some = [...formData.values()].some(x => x == '');

               try {
                              if (some == true) {
                                             throw new Error(`All fields are required!`);
                              };
                              const stor = JSON.parse(sessionStorage.getItem('userData'));
                              const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }), {});



                              const res = await fetch(`http://localhost:3030/data/movies/${id}`, {
                                             method: 'put',
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