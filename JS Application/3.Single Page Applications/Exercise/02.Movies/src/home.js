import { onAdding } from "./addMovie.js";
import { viewMovie } from "./movieExaple.js";
import { viewSection } from "./util.js";

const homepage = document.getElementById('home-page');
homepage.remove()

const addBtn = homepage.querySelector('#add-movie-button a');
addBtn.addEventListener('click', onAdding);

export function toHomePage(event) {
               if (event != undefined) {
                              event.preventDefault();
                              console.log(event.target)
               };
               viewSection(homepage);

               loadingMovies();
};

async function loadingMovies(){
               const res = await fetch('http://localhost:3030/data/movies', {
                              method: 'get',
                              headers: {
                                             'Content-Type': 'application/json'
                              }
               });
               const data = await res.json();
               
               console.log(data)
}         