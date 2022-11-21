import { viewSection, el } from "./util.js";
import { onEdit } from "./editMovie.js";
import { likes } from "./likes.js";

const movieExampleSection = document.getElementById('movie-example');
movieExampleSection.remove();

export function viewMovie(event) {
               event.preventDefault();
               const divParent = event.target.parentElement.parentElement.parentElement;

               request(divParent.id)
};

async function request(id) {
               const res = await fetch(`http://localhost:3030/data/movies/${id}`, {
                              method: 'get',
                              headers: {
                                             'Content-Type': 'application/json'
                              }
               });
               const data = await res.json();

               const divModie = example(data);
               const liked = divModie.querySelector('.liked');

               if (data._ownerId == JSON.parse(sessionStorage.getItem('userData')).id && data._ounerId != undefined) {
                              [...divModie.querySelectorAll('.owner')].forEach(d => d.style.display = 'inline-block');
                              [...divModie.querySelectorAll('.notOuner')].forEach(d => d.style.display = 'none');
                              liked.style.display = 'none';

               } else {
                              [...divModie.querySelectorAll('.owner')].forEach(d => d.style.display = 'none');
                              [...divModie.querySelectorAll('.notOuner')].forEach(d => d.style.display = 'inline-block');
                              liked.style.display = 'none';
               };

               movieExampleSection.replaceChildren(divModie);
               viewSection(movieExampleSection);
}

function example(data) {
               const deleteBtn = el('a', ['btn btn-danger owner delete'], [['href', '#']], 'Delete');
               deleteBtn.addEventListener('click', onDelete);
               const editBtn = el('a', ['btn btn-warning owner edit'], [['href', '#']], 'Edit');
               editBtn.addEventListener('click', onEdit);
               const likeBtn = el('a', ['btn btn-primary notOuner like'], [['href', '#']], 'Like');
               likeBtn.addEventListener('click', likes);

               const divMovie = el('div', ['container'], [],
                              el('div', ['row bg-light text-dark'], [['id', data._id]],
                                             el('h1', [], [], `Movie title: ${data.title}`),
                                             el('div', ['col-md-8'], [],
                                                            el('img', ['img-thumbnail'], [['src', data.img], ['alt', 'Movie']], '')
                                             ),
                                             el('div', ['col-md-4 text-center'], [],
                                                            el('h3', ['my-3'], [], 'Movie Description'),
                                                            el('p', [], [], data.description),
                                                            deleteBtn,
                                                            editBtn,
                                                            likeBtn,
                                                            el('span', ['enrolled-span liked'], [], 'Liked')
                                             )
                              )
               );
               return divMovie;
};

async function onDelete(event) {
               event.preventDefault();
               console.log(event.target)
}

