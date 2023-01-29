import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';


const url = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

goto();

async function goto(){
   const data = await request();
   const users = loadingStudents(data)
   render(users, root);
}


function loadingStudents(data, searchedText) {
   const usersTempls = html`${repeat(Object.values(data), user => user._id, user => html`
     <tr class=${searchedText && (user.firstName.include(searchedText) ||
                     user.lastName.include(searchedText) ||
                     user.email.include(searchedText) ||
                     user.course.include(searchedText)) ? "yellow" : ''}>
                     <td>${user.lastName}</td>
                     <td>${user.email}</td>
                     <td>${user.course}</td>
                  </tr>
   `)}`
 return usersTempls;
};



function onClick(event) {
   const searchField = event.target.parentElement.querySelector('#searchField').value;
   console.log(serchField)

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


