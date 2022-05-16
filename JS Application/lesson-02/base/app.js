async function getRecipes(){
               const response = await fetch(`http://localhost:3030/jsonstore/cookbook/recipes`);
               const data = await response.json();
               return data;
             

};
window.addEventListener('load', async ()=> {
               const data = await getRecipes()
               Array.from(data).forEach(element => console.log(element))
})

// function el(type, className, ...content){
//                const tag = document.createElement(type);

//                if(className != undefined){
//                               tag.classList = className;
//                };

//                if(content[0] != undefined){
//                               for(let word of content){
//                                              if(typeof word == 'string' || typeof word == 'number'){
//                                                             word = document.createTextNode(word);
//                                              };
//                                              tag.appendChild(word);
//                               };
//                };
//                return tag;
// }

