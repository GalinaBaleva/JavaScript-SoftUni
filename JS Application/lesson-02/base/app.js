async function getRecipes() {
               const response = await fetch(`http://localhost:3030/jsonstore/cookbook/recipes`);
               const data = await response.json();

               return data;


};
window.addEventListener('load', async () => {
               const mainTag = document.getElementsByTagName('main')[0];
               const data = await getRecipes()
               Object.values(data).forEach(element => {
                              const imgTag = document.createElement('img');
                              imgTag.setAttribute('src', element.img)
                              const articleTag = el('article', 'preview',
                                             el('div', 'title', el('h2', undefined, element.name)),
                                             el('div', 'small', imgTag));
                              
                              mainTag.firstChild.remove();
                              mainTag.appendChild(articleTag);
                              articleTag.addEventListener('click', async () => {
                                             let promise = getByID(element._id);
                                             addingIngredients(articleTag, promise, mainTag);         
                              });
               });
});
async function addingIngredients(articleTag, promise, mainTag){
               console.log(articleTag, promise, mainTag)

}
async function getByID(id) {
               const url = `http://localhost:3030/jsonstore/cookbook/details/`;
               const response = await fetch(url + id);
               const data = response.json();

               return data;
               
};


function el(type, className, ...content) {
               const tag = document.createElement(type);

               if (className != undefined) {
                              tag.classList = className;
               };

               if (content[0] != undefined) {
                              for (let word of content) {
                                             if (typeof word == 'string' || typeof word == 'number') {
                                                            word = document.createTextNode(word);
                                             };
                                             tag.appendChild(word);
                              };
               };
               return tag;
}

