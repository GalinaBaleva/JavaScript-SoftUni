import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';


const url = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

goto();

async function goto(searchField){
   const data = await request();
   const users = loadingStudents(data, searchField)
   render(users, root);
}


function loadingStudents(data, searchedText) {
   const usersTempls = html`${repeat(Object.values(data), user => user._id, user => html`
     <tr class=${searchedText && (user.firstName.toLowerCase().includes(searchedText) ||
                     user.lastName.toLowerCase().includes(searchedText) ||
                     user.email.toLowerCase().includes(searchedText) ||
                     user.course.toLowerCase().includes(searchedText)) ? 'select' : ''}>
                     <td>${user.firstName} ${user.lastName}</td>
                     <td>${user.email}</td>
                     <td>${user.course}</td>
                  </tr>
   `)}`
 return usersTempls;
};



function onClick(event) {
   let searchField = event.target.parentElement.querySelector('#searchField').value;
   goto(searchField.toLowerCase());
   searchField = '';

};


async function request() {
 try{  
   const resp = await fetch(url, {method: 'GET'});
   if(resp.ok != true){
      throw new Error(resp.json());
   }
   const data = await resp.json();

   return data;
} catch(err){
      alert(err.message);
   }
};


