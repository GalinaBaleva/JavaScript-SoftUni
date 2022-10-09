const tBody = document.getElementsByTagName('tbody')[0];

window.addEventListener('DOMContentLoaded', async () => {
               const answer = await loadingContent();
               if (answer === `Error`) {
                              return;
               };

               Object.values(answer).forEach(element => creatingTr(element));

               const btn = document.getElementById('submit');
               btn.addEventListener('click', async () => {
                              createNewStudent()
               });
});
const url = `http://localhost:3030/jsonstore/collections/students`;
const inputs = Array.from(document.getElementsByClassName('inputs')[0].children);



async function loadingContent() {
               try {
                              const res = await fetch(url);
                              if (res.status != 200) {
                                             throw new Error(`Error`);
                              };

                              const result = await res.json();

                              return result;
               } catch (error) {
                              return error.message;
               };
};

function creatingTr(element) {
               let trElement = el('tr',
                              el('th', element.firstName),
                              el('th', element.lastName),
                              el('th', element.facultyNumber),
                              el('th', element.grade));

               tBody.appendChild(trElement);
};

async function createNewStudent() {
               let isTrue = inputs.some(c => c.value == '');

               if (isTrue == true) {
                              inputs.map(i => i.vlaue = '');
               }
               //create new student
               //push 
}

function el(tagName, ...text) {
               let tag = document.createElement(tagName);

               for (let word of text) {
                              if (typeof (word) == 'string' || typeof (word) == 'number') {
                                             word = document.createTextNode(word);
                              };
                              tag.appendChild(word);
               };
               return tag;
};