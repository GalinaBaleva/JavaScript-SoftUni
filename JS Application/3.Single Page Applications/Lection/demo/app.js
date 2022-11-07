import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showAbout } from './about.js';




document.querySelectorAll('section').forEach(s => s.style.display = 'none');
document.getElementById('homeView').style.display = '';
document.querySelector('nav').addEventListener('click', onNavigate);

showView('homeView');

const sections = {
               'homeBtn': 'homeView',
               'catalogBtn': 'catalogView',
               'aboutBtn': 'aboutView'
};

function onNavigate(event){
               if(event.target.tagName === 'BUTTON'){
                              const view = sections[event.target.id];
                              
                              if(typeof(view) == 'function'){
                                             event.preventDefalut();
                                             view()
                              }
                              showView(view);
               };
};

function showView(id){
               document.querySelectorAll('section').forEach(s => s.style.display = 'none');
               document.getElementById(id).style.display = '';       
};






