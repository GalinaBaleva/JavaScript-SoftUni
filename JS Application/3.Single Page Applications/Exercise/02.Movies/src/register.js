import { viewSection } from "./util.js";

const registerSection = document.getElementById('form-sign-up');
registerSection.remove();

const form = registerSection.querySelector('#register-form');
form.addEventListener('submit', onSubmit); 

export function onRegister(event){
               event.preventDefault();
               viewSection(registerSection);
}

function onSubmit(event){
               console.log(event.target);
}