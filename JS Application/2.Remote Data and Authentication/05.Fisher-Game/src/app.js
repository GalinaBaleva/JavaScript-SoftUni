let userData = null;

window.addEventListener('DOMContentLoaded', () => {
               userData = JSON.parse(sessionStorage.getItem('userData'));
               if (userData != null) {
                              document.getElementById('guest').style.display = 'none';
                              document.querySelector('#addForm .add').disabled = false;
               } else {
                              document.getElementById('user').style.display = 'none';
               };
               document.querySelector('.load').addEventListener('click', loadData);
});

async function loadData(event) {
               event.preventDefault();
               const catches = document.querySelector('#catches');
               catches.replaceChildren();

               const res = await fetch('http://localhost:3030/data/catches');
               const data = await res.json();

               Object.values(data).map(el => {
                              catches.appendChild(createAngler(el));
               });
};

function createAngler(el){
               const isUser = userData && userData.id == el._ownerId ? [] : ['disabled', true];
               const updateBtn = e('button', 'update', [['data_id', el._ownerId], isUser], 'Update');
               updateBtn.addEventListener('click', onUpdate)
               const deleteBtn = e('button', 'delete', [['data_id', el._ownerId], isUser], 'Delete');
               deleteBtn.addEventListener('click', onDelete)
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
               console.log(event);
};

async function onDelete(event) {
               console.log(event);
}

function e(tagName, className, attrNames, ...text) {
               let tag = document.createElement(tagName);

               if (className != '') {
                              tag.className = className;
               };

               if (attrNames.length > 0) {
                              for (let att of attrNames) {
                                             if(att[0] != undefined){
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



