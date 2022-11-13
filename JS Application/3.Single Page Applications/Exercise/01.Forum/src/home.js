import { showDetails } from './details.js';
import { el } from './util.js';

const homeView = document.getElementById('homeView');
homeView.remove();
const main = document.getElementsByTagName('main')[0];

homeView.querySelector('h2').addEventListener('click', showDetails);


const form = homeView.querySelector('form');
form.addEventListener('submit', onSubmit);

homeView.querySelector('[name="cancel"]').addEventListener('click', onClearForm);


export function showHome(ev) {
               ev?.preventDefault();
               onClearForm();
               main.replaceChildren(homeView);

               loadingComments();
};

async function loadingComments() {
               const commentsSection = main.querySelector('#comments');
               try {

                              const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);

                              if (res.ok != true) {
                                             const error = res.json();
                                             throw new Error(error.message)
                              }
                              const data = await res.json();

                              if (Object.entries(data).length === 0) {
                                             throw new Error(`No data in server!`)
                              };

                              commentsSection.replaceChildren();
                              Object.values(data).forEach(com => {
                                             
                                             commentsCreator(com);
                              })
               } catch (error) {
                              return error.message;
               }
};

function commentsCreator(data) {
               const h2 = el('h2', '', [], data.topicName);
               h2.addEventListener('click', showDetails);
               const a = el('a', 'normal', [['href', '#']], h2);
               a.addEventListener('click', showDetails);
               const div = el('div', 'topic-container', [['data-id', data._id]],
                              el('div', 'topic-name-wrapper', [],
                                             el('div', 'topic-name', [],
                                                            a,
                                                            el('div', 'columns', [],
                                                                           el('div', '', [],
                                                                                          el('p', '', [], `'Data': ${data.dataCreated}`),
                                                                                          el('div', 'nick-name', [],
                                                                                                         el('p', '', [],
                                                                                                                        el('span', '', [], data.username)
                                                                                                         )
                                                                                          )
                                                                           )
                                                            )
                                             )
                              )
               )
               main.appendChild(div);
};


async function onSubmit(ev) {
               ev.preventDefault();
               const formData = new FormData(form);

               const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }), {});
               body.dataCreated = new Date().toString();
               const someDataIsMissing = Object.values(body).some(x => x === '');

               try {

                              if (someDataIsMissing == true) {
                                             throw new Error(`All fields are required!`)
                              };

                              const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
                                             method: 'post',
                                             'Content-Type': 'application/json',
                                             body: JSON.stringify(body)
                              });

                              if (res.ok != true) {
                                             const error = res.json();
                                             throw new Error(error.message);
                              };

                              onClearForm();
                              showHome();

               } catch (error) {
                              alert(error.message);
                              return
               };




};

function onClearForm(ev) {
               form.reset();
};