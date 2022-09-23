window.addEventListener('DOMContentLoaded', async () => {
               const recipes = await getAnswer(`http://localhost:3030/jsonstore/cookbook/recipes`);
               const main = document.getElementsByTagName('main')[0];
               console.log(recipes)
               createRecipes(recipes, main);
});

function createRecipes(recipes, mainTag) {
               mainTag.replaceChildren();
               Object.values(recipes).forEach(recepe => {
                              const articleTag = el('article', 'preview', ['id', recepe._id],
                                             el('div', 'title', [],
                                                            el('h2', '', [], recepe.name)),
                                             el('div', 'small', [],
                                                            el('img', '', ['src', recepe.img], ''))
                              );
                              articleTag.addEventListener('click', () => {
                                             onClick(recepe._id);
                              })
                              mainTag.appendChild(articleTag);
               });
};

async function onClick(e) {
               const answerById = getAnswer(`http://localhost:3030/jsonstore/cookbook/details/` + e);
               console.log(answerById)
}


async function getAnswer(url) {
               try {
                              const answer = await fetch(url);

                              if (answer.status != 200) {
                                             throw new Error(`Error`);
                              };

                              const data = await answer.json();

                              return data;
               } catch (error) {
                              return error.message;
               }
};

function el(tagName, className, attrArray, ...text) {
               let tag = document.createElement(tagName);

               if (className != '') {
                              tag.classList.add(className);
               };
               if (attrArray.length != 0) {
                              tag.setAttribute(attrArray[0], attrArray[1]);
               };
               for (let word of text) {
                              if (typeof (word) == 'string' || typeof (word) == 'number') {
                                             word = document.createTextNode(word);
                              };
                              tag.appendChild(word);
               };
               return tag;
}

