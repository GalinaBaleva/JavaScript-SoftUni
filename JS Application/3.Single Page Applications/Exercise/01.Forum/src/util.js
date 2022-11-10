export function el(tagName, className, attrNames, ...text){
               let tag = document.createElement(tagName);
               
               if(className !== ''){
                              tag.className = className;
               };

               if(attrNames.length != 0){
                              for(let attr of attrNames){
                                             tag.setAttribute(attr[0], attr[1]);
                              };
               };

               for(let word of text){
                              if(typeof(word) == 'string' || typeof(word) == 'number'){
                                             word = document.createTextNode(word);
                              };
                              tag.appendChild(word);
               };

               return tag;
}