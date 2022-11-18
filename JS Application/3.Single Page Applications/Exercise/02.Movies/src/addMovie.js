import { viewSection } from "./util.js";

const addSection = document.getElementById('add-movie');
addSection.remove();

export function onAdding(event){
               event.preventDefault();

               viewSection(addSection);
}