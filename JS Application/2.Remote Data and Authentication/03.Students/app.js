const tBody = document.getElementsByTagName('tbody')[0];
tBody.replaceChildren()

const btn = document.getElementById('submit');
btn.addEventListener('click', async (event) => {
               createNewStudent(event)
});

async function firstLoading () {
               tBody.replaceChildren()
               const answer = await loadingContent();
               if (answer === `Error`) {
                              return;
               };

               Object.values(answer).forEach(element => creatingTr(element));

};
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

async function createNewStudent(event) {
               event.preventDefault()
               let isTrue = inputs.some(c => c.value == '');

               if (isTrue == true) {
                              inputs.forEach(i => { i.value = '' });

                              return;
               };

               const options = {
                              method: 'post',
                              headers: {
                                             'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({
                                             firstName: inputs[0].value,
                                             lastName: inputs[1].value,
                                             facultyNumber: inputs[2].value,
                                             grade: inputs[3].value
                              })
               };
               try {
                              const res = await fetch(url, options);
                              inputs.forEach(i => { i.value = '' });
                              firstLoading()
                              
               } catch (error) {
                              return;
               };
};

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

firstLoading();