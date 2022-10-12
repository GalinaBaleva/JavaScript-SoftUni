const url = `http://localhost:3030/jsonstore/collections/books`;
const tBody = document.getElementsByTagName('tbody')[0];
tBody.replaceChildren();

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', async () => onLoadBtn());

async function onLoadBtn() {
               const books = await requests();


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
                              tag.
               }
}