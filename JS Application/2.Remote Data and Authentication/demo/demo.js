window.addEventListener('DOMContentLoaded', event => {
               const form = document.querySelector('form');
               form.addEventListener('submit', onSubmit);
});

const person = document.querySelector('[name = "person"]');
const phone = document.querySelector('[name = "phone"]');

       
async function onSubmit(event){
               event.preventDefault();
               const data = new FormData(event.target);

               const person = data.get('person').trim();
               const phone = data.get('phone').trim();

               const record = { person, phone };

               const result = await postData(record);

               event.target.reset();
               alert('Record created');
};

async function getData() {
               const url = `http://localhost:3030/jsonstore/phonebook`;

               const options = { headers: {} };

               const token = sessionStorage(getItem('token'));
               if(token !== null){
                              options.headers['X-Authorization'] = token;
               };

               const res = await fetch(url, options);
               const result = await res.json();

               return result;
};

async function getDataById(id) {
               const url = `http://localhost:3030/jsonstore/phonebook` + id;

               const res = await fetch(url, options);
               const result = await res.json();

               return result;
};
async function postData(data) {
               const url = `http://localhost:3030/jsonstore/phonebook`;

               const options = {
                              method: 'post',
                              headers: {
                                             'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(data)
               };

               const res = await fetch(url, options);
               const result = await res.json();

               return result;
};

async function updateData(id, data) {
               const url = `http://localhost:3030/jsonstore/phonebook` + id;

               const options = {
                              metod: 'put',
                              headers: {
                                             'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(data)
               };
               const res = await fetch(url, options);
               const result = await res.json();

               return result;
};

async function deleteData(id) {
               const url = `http://localhost:3030/jsonstore/phonebook` + id;

               const options = {
                              metod: 'delete'
               };
               const res = await fetch(url, options);
               const result = await res.json();

               return result;
};