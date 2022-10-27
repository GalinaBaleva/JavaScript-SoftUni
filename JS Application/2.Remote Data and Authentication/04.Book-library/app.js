const url = `http://localhost:3030/jsonstore/collections/books`;
const tBody = document.getElementsByTagName('tbody')[0];

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', async () => loadingContent());

const editForm = document.getElementsByClassName('edit-form')[0];
let [title, author] = editForm.querySelectorAll('input');
title.value = '';
author.value = ''

const createForm = document.getElementsByClassName('form')[0];
createForm.addEventListener('submit', createRow);


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
               event.preventDefault();
               title.value = '';
               author.value = '';

               createForm.style.display = 'none';
               editForm.style.display = 'block';
               const parentWithId = event.target.parentElement;
               const id = parentWithId.dataset.id;

               const answer = await requests(id);

               title.value = answer.title;
               author.value = answer.author;

               editForm.addEventListener('submit', async (event) => onEditSubmit(id, title, author, event));
};

async function onEditSubmit(id, title, author, event) {
               event.preventDefault();
               const options = {
                              method: 'put',
                              headers: {
                                             'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({ title: title.value, author: author.value })
               };

               const result = await requests(id, options);
               loadingContent();
               title.value = '';
               author.value = '';

               createForm.style.display = 'block';
               editForm.style.display = 'none';

};

async function createRow(event) {
               event.preventDefault();

               const data = new FormData(createForm);
               const titleToCreate = data.get('title');
               const authorToCreate = data.get('author');

               if (titleToCreate == '' || authorToCreate == '') {
                              return;
               };

               const options = {
                              method: 'post',
                              headers: {
                                             'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({ title: titleToCreate, author: titleToCreate })
               };

               const res = await requests(undefined, options);
               createForm.reset();
               loadingContent();
};

async function onDelete(event) {
               const parent = event.target.parentElement;
               const options = {
                              method: 'delete',
                              headers: {
                                             'Content-Type': 'application/json'
                              }
               };
               const answer = await requests(parent.dataset.id, options);
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