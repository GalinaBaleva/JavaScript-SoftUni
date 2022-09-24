window.addEventListener('DOMContentLoaded', async () => {
               const recipes = await getAnswer(`http://localhost:3030/jsonstore/cookbook/recipes`);
               const main = document.getElementsByTagName('main')[0];
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
                                             onClick(recepe._id, articleTag);
                              })
                              mainTag.appendChild(articleTag);
               });
};

async function onClick(e, articleTag) {
               const answerById = await getAnswer(`http://localhost:3030/jsonstore/cookbook/details/` + e);
               console.log(answerById, articleTag)

               const liTags = [];
               answerById.steps.forEach(element => {
                             liTags.push(el('li', '', [], element));
                             
               })
               console.log(liTags)

               const openArticle = el('atricle', '', [],
                              el('h2', '', [], answerById.name),
                              el('div', 'band', [],
                                             el('div', 'thumb', [],
                                                            el('img', '', ['src', answerById.img], '')),
                                             el('div', 'ingredients', [],
                                                            el('h3', '', [], 'Ingredients'),
                                                            el('ul', '', [], liTags))))
                                                                           
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

