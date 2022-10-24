let userData = null;

window.addEventListener('DOMContentLoaded', () => {
               const catches = document.querySelector('#catches');
               catches.replaceChildren();
               userData = JSON.parse(sessionStorage.getItem('userData'));
               if (userData != null) {
                              document.getElementById('guest').style.display = 'none';
                              document.querySelector('#addForm .add').disabled = false;
               } else {
                              document.getElementById('user').style.display = 'none';
               };
               document.querySelector('.load').addEventListener('click', loadData);

               document.querySelector('#addForm').addEventListener('submit', onSubmit);
});

async function loadData(event) {
               catches.replaceChildren();

               const res = await fetch('http://localhost:3030/data/catches');
               const data = await res.json();

               Object.values(data).map(el => {
                              catches.appendChild(createAngler(el));
               });
};

async function onSubmit(event) {
               event.preventDefault();

               if (!userData) {
                              window.location = '/login.html';
                              return;
               };

               const formData = new FormData(event.target);
               const data = [...formData.entries()].reduce((a, [key, value]) => Object.assign(a, { [key]: value }), {});
               console.log(data)

               try {
                              if (Object.values(data).some(x => x == '')) {
                                             throw new Error('All fields are required!');
                              };

                              const res = await fetch(`http://localhost:3030/data/catches/`, {
                                             method: 'post', 
                                             headers: {
                                                            'Content-Type': 'applications/json',
                                                            'X-Authorization': userData.token
                                             },
                                             body: JSON.stringify(data)
                              });
                              if(res.ok != true){
                                             const error = await res.json();
                                             throw new Error(error.message);
                              };
                              event.target.reset()
                              loadData();

               } catch (error) {
                              alert(error.message);
               }

}

function createAngler(el) {
               const isUser = userData && userData.id == el._ownerId ? [] : ['disabled', true];
               const updateBtn = e('button', 'update', [['data-id', el._id], isUser], 'Update');
               updateBtn.addEventListener('click', onUpdate);

               const deleteBtn = e('button', 'delete', [['data-id', el._id], isUser], 'Delete');
               deleteBtn.addEventListener('click', onDelete);

               const angler = e('div', 'catch', [],
                              e('label', '', [], 'Angler'),
                              e('input', 'angler', [['type', 'text'], ['value', el.angler], isUser], ''),
                              e('label', '', [], 'Weight'),
                              e('input', 'weight', [['type', 'text'], ['value', el.weight], isUser], ''),
                              e('label', '', [], 'Species'),
                              e('input', 'species', [['type', 'text'], ['value', el.species], isUser], ''),
                              e('label', '', [], 'Location'),
                              e('input', 'location', [['type', 'text'], ['value', el.location], isUser], ''),
                              e('label', '', [], 'Bait'),
                              e('input', 'bait', [['type', 'text'], ['value', el.bait], isUser], ''),
                              e('label', '', [], 'Capture Time'),
                              e('input', 'captureTime', [['type', 'number'], ['value', el.captureTime], ['disabled', isUser]], ''),
                              e('label', '', [], 'Capture Time'),
                              updateBtn,
                              deleteBtn
               );
               return angler;
};

async function onUpdate(event) {
               const id = event.target.dataset.id;
               const formData = event.target.parentElement;
               const inputs = formData.querySelectorAll('input');
               let obj = {};
               const data = [...inputs].forEach(element => {
                              Object.assign(obj, {[element.className]:element.value});
               });
               console.log(obj)
               
               try{
                              if([...Object.values(obj)].some(x => x === '')){
                                             throw new Error('All fields are required!')
                              }
                              const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
                                             method: 'put',
                                             headers: {
                                                            'Content-Type': 'applications/json',
                                                            'X-Authorization': userData.token
                                             },
                                             body: obj
                              });

                              // if()
                              const data = res.json();
                              console.log(data)
               } catch (error){
                              alert(error.message);
               }





               
};

async function onDelete(event) {
               const parent = event.target.parentElement;
               const id = event.target.dataset.id;

               await fetch(`http://localhost:3030/data/catches/${id}`, {
                              method: 'delete',
                              headers: {
                                             'Content-Type': 'applications/json',
                                             'X-Authorization': userData.token
                              }
               });
               loadData();
};

function e(tagName, className, attrNames, ...text) {
               let tag = document.createElement(tagName);

               if (className != '') {
                              tag.className = className;
               };

               if (attrNames.length > 0) {
                              for (let att of attrNames) {
                                             if (att[0] != undefined) {
                                                            tag.setAttribute(att[0], att[1]);
                                             }
                              };
               };

               for (let word of text) {
                              if (typeof (word) === 'string' || typeof (word) === 'number') {
                                             word = document.createTextNode(word);
                              };
                              tag.appendChild(word);
               };
               return tag;
};
//welcome, chenge the name
//logout function
//delete and update functionality



