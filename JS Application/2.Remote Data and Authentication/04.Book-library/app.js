const url = `http://localhost:3030/jsonstore/collections/books`;
const tBody = document.getElementsByTagName('tbody')[0];

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', async () => loadingContent());

loadingContent();

async function loadingContent() {
               tBody.replaceChildren();

               const books = await requests();

               Object.entries(books).forEach(book => {
                              const editBtn = el('button', [], 'Edit');
                              editBtn.addEventListener('click', onEdit);

                              const deleteBtn = el('button', [], 'Delete');
                              deleteBtn.addEventListener('click', onDelete)

                              const tr = el('tr', [],
                                             el('td', [], book[1].title),
                                             el('td', [], book[1].author),
                                             el('td', ['data-id', book[0]],
                                                            editBtn,
                                                            deleteBtn
                                             )
                              );
                              tBody.appendChild(tr);
               });
};

async function onEdit(event) {
               const parentWithId = event.target.parentElement;
               const id = parentWithId.dataset.id;

               const parent = parentWithId.parentElement;
               
               const answer = await requests(id);

               //taking info from inputs
               //making post request
               //clear inputs
               

               // const editBtn = el('button', [], 'Edit');
               // editBtn.addEventListener('click', onEdit);

               // const deleteBtn = el('button', [], 'Delete');
               // deleteBtn.addEventListener('click', onDelete)

               // const tr = el('tr', [],
               //                el('td', [], answer.title),
               //                el('td', [], answer.author),
               //                el('td', ['data-id', id],
               //                               editBtn,
               //                               deleteBtn
               //                )
               // );

               // parent.repalceWith(tr);


               

};

async function onDelete(event) {
               const parent = event.target.parentElement;
               const options = {
                              method: 'delete',
                              headers: {
                                             'Content-Type': 'applications/json'
                              }
               };
              const answer = await requests (parent.dataset.id, options);
              loadingContent();
};

async function requests(id, options) {
               let permanentUrl = '';
               let res = '';

               if (id !== undefined) {
                              permanentUrl = url + `/${id}`;
               } else {
                              permanentUrl = url;
               };

               if (options != undefined) {
                              res = await fetch(permanentUrl, options);
               } else {
                              res = await fetch(permanentUrl);
               };

               const result = await res.json();

               return result;
};

function el(tagName, attrName, ...text) {
               let tag = document.createElement(tagName);

               if (attrName != '') {
                              tag.setAttribute(attrName[0], attrName[1])
               };

               for (let word of text) {
                              if (typeof (word) === 'number' || typeof (word) == 'string') {
                                             word = document.createTextNode(word);
                              };
                              tag.appendChild(word);
               };
               return tag;
};