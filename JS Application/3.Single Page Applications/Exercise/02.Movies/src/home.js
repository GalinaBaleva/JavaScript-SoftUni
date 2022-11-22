import { onAdding } from "./addMovie.js";
import { viewMovie } from "./movieExample.js";
import { viewSection, el } from "./util.js";

const homepage = document.getElementById('home-page');
homepage.remove()

import { onLogin } from "./login.js";

const addBtn = homepage.querySelector('#add-movie-button a');
addBtn.addEventListener('click', onAdding);
const movieList = homepage.querySelector('#movies-list');

export function toHomePage(event) {

               if (event != undefined) {
                              event.preventDefault();
               };

               viewSection(homepage);

               loadingMovies();
};

async function loadingMovies() {
               const res = await fetch('http://localhost:3030/data/movies', {
                              method: 'get',
                              headers: {
                                             'Content-Type': 'application/json'
                              }
               });
               const data = await res.json();

               movieList.replaceChildren();
               [...data.values()].forEach(movie => movieMaker(movie));

}

function movieMaker(movie) {
               const button = el('button', ['btn btn-info'], [['type', 'button']], 'Details');
               button.addEventListener('click', viewMovie)
               const divCard = el('div', ['card mb-4'], [['id', movie._id]],
                              el('img', ['card-img-top'], [['src', movie.img], ['alt', 'Card image cap'], ['width', '400']], ''),
                              el('div', ['card-body'], [],
                                             el('h4', ['card-title'], [], movie.title)
                              ),
                              el('div', ['card-footer'], [],
                                             el('a', [], [['href', '#/details/6lOxMFSMkML09wux6sAF']],
                                                            button
                                             )
                              )
               );
               movieList.appendChild(divCard);
};