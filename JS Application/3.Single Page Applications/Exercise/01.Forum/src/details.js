import { el } from './util.js';

const detailsView = document.getElementById('detailsView');
detailsView.remove();

const form = detailsView.querySelector('.answer-comment .answer form');
form.addEventListener('submit', onSubmit);

export function showDetails(event) {
               if (event.target != undefined) {
                              let target = event.target;
                              if (target.tagName == 'H2') {
                                             target = target.parentElement;
                              };

                              if (target.tagName == 'A') {
                                             event.preventDefault();
                                             const id = target.dataset.id;
                                             detailsView.setAttribute('data-id', id);
                                             showPost(id);
                              };
               } else {
                              showPost(event);
               }
};



async function showPost(id) {
               document.getElementsByTagName('main')[0].replaceChildren(`Loading...`);
               const commentSection = detailsView.querySelector('.comment');
               const formForCommenst = detailsView.querySelector('.answer-comment');

               const [res, resCommenst] = await Promise.all([
                              fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/` + id),
                              fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/`)
               ]);

               const [data, dataComments] = await Promise.all([
                              res.json(),
                              resCommenst.json()
               ]);

               const userData = loadingCommenst(data, dataComments, id);
               commentSection.replaceWith(userData);

               let currentUser = formForCommenst.querySelector('p span');
               currentUser.textContent = data.username;

               const main = document.getElementsByTagName('main')[0];
               main.replaceChildren(detailsView);

};

function loadingCommenst(data, dataComments, id) {

               const divComment = el('div', 'comment', [], '');
               const divUserHeader = el('div', 'header', [],
                              el('img', '', [['src', './static/profile.png'], ['alt', 'avatar']]),
                              el('p', '', [],
                                             el('span', '', [], data.username),
                                             ' posted on ',
                                             el('time', '', [], data.dataCreated)
                              ),
                              el('p', 'post-content', [], data.postText)

               );

               divComment.appendChild(divUserHeader);

               const answers = Object.entries(dataComments).filter(ans => ans[1].usersId == id);

               if (answers.length !== 0) {
                              const userComment = answers.forEach(userComment => {
                                             const div = el('div', '', [['id', 'user-comment']],
                                                            el('div', 'topic-name-wrapper', [],
                                                                           el('div', 'topic-name', [],
                                                                                          el('p', '', [],
                                                                                                         el('strong', '', [], userComment[1].username),
                                                                                                         ' commented on ',
                                                                                                         el('time', '', [], userComment[1].dataCreated)
                                                                                          ),
                                                                                          el('div', 'post-content', [],
                                                                                                         el('p', '', [], userComment[1].postText)
                                                                                          )
                                                                           )
                                                            )
                                             )
                                             divComment.appendChild(div);
                              })
               };
               return divComment;
};
async function onSubmit(event) {
               event.preventDefault();
               const id = event.target.parentElement.parentElement.parentElement.dataset.id;

               const formData = new FormData(event.target);

               try {
                              const someEmptyField = [...formData.values()].some(x => x.trim().length == 0)
                              if (someEmptyField == true) {
                                             throw new Error(`All fields are required!`)
                              }
                              const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }), {});
                              body.usersId = id;
                              body.dataCreated = new Date();


                              const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                                             method: 'post',
                                             'Content-Type': 'application/json',
                                             body: JSON.stringify(body)
                              });

                              if (res.ok != true) {
                                             const error = res.json();
                                             throw new Error(error.message);
                              };

                              const data = res.json();
                              form.reset();
                              showDetails(id);

               } catch (error) {
                              alert(error.message);
               }
}




