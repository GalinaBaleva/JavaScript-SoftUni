window.addEventListener('DOMContentLoaded', event => {
               const form = document.querySelector('form');
               form.addEventListener('submit', event => {
                              event.preventDefault();

                              const person = document.querySelector('[name = "person"]').value;
                              const phone = document.querySelector('[name = "phone"]').value;

                              const record = { person, phone };

                              postData(record);
               });
});
               


async function getDataById() {
               const url = `http://localhost:3030/jsonstore/phonebook`;

               const res = await fetch(url);
               const result = await res.json();

               return result;
}

async function getDataById(id) {
               const url = `http://localhost:3030/jsonstore/phonebook` + id;

               const res = await fetch(url, options);
               const result = await res.json();

               return result;
}
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
}