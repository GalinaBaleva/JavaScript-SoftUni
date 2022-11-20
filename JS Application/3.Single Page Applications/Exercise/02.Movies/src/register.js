import { viewSection } from "./util.js";

const registerSection = document.getElementById('form-sign-up');
registerSection.remove();

const form = registerSection.querySelector('#register-form');
form.addEventListener('submit', onSubmit);

export function onRegister(event) {
               event.preventDefault();
               viewSection(registerSection);
}

async function onSubmit(event) {
               event.preventDefault();
               const formData = new FormData(event.target);

               const some = [...formData.values()].some(x => x == '');
               const password = formData.get('password');
               const repeat = formData.get('repeatPassword');

               try {
                              if (some == true) {
                                             throw new Error(`All fields are required!`);
                              };

                              if (password.length < 7) {
                                             throw new Error(`The password should be at least 6 characters long!`);
                              };

                              if (password != repeat) {
                                             throw new Error(`The repeat password should be equal to the password!`);
                              };

                              const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }), {});

                              const res = await fetch('http://localhost:3030/users/register', {
                                             method: 'post',
                                             headers: {
                                                            'Content-Type': 'appliction/json'
                                             },
                                             body: JSON.stringify(body)
                              });

                              if (res.ok != true) {
                                             const error = await res.json();
                                             throw new Error(error.message);
                              };

                              const data = await res.json();

                              const storage = {
                                          email: data.email,
                                          username: data.username,
                                          id: data._id,
                                          accessToken: data.accessToken
                              }
                              sessionStorage.setItem('userData', JSON.stringify(storage));
                              window.location = '/';

               } catch (error) {
                              alert(error.message)
               }
}