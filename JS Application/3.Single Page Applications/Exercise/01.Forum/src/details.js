import { el } from './util.js';

const detailsView = document.getElementById('detailsView');
detailsView.remove();

export function showDetails(event) {
               let target = event.target;
               if (target.tagName == 'H2') {
                              target = target.parentElement;
               };

               if (target.tagName == 'A') {
                              event.preventDefault();
                              const id = target.dataset.id;
                              showPost(id);
               };
};



async function showPost(id) {
               document.getElementsByTagName('main')[0].replaceChildren(`Loading...`);
               const commentSection = detailsView.querySelector('.comment');

               const [res, resCommenst] = await Promise.all([
                              fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/` + id),
                              fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`)
               ]);

               const [data, dataComments] = await Promise.all([
                              res.json(),
                              resCommenst.json()
               ]);
               const formForCommenst = detailsView.querySelector('.answer-comment');


               const post = createPost(data, dataComments, formForCommenst);

               document.getElementsByTagName('main')[0].replaceChildren(post);
}


function createPost(data, dataComments) {

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

               if ([...data].length !== 0) {
                              const userComment = el('div', '', [['id', 'user-comment']],
                                             el('div', 'topic-name-wrapper', [],
                                                            el('div', 'topic-name', [],
                                                                           el('p', '', [],
                                                                                          el('strong', '', [], dataComments.username),
                                                                                          ' commented on ',
                                                                                          el('time', '', [], dataComments.dataCreated)
                                                                           ),
                                                                           el('div', 'post-content', [],
                                                                                          el('p', '', [], dataComments.postText)
                                                                           )
                                                            )
                                             )
                              )
               };
               



               
               return div;
}
