import { showHome } from './home.js';

const homeBtn = document.querySelector('nav a');
homeBtn.addEventListener('click', showHome)

showHome();