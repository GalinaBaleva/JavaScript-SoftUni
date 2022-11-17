import { onAdding } from "./addMovie.js";
import { viewMovie } from "./movieExaple.js";

const homepage = document.getElementById('home-page');
homepage.remove()

export function toHomePage(event){
               event.preventDefault();
               console.log(event.target)
}