// function modernTimeOfHashTag(text) {
//                text = text.split(' ');
//                const result = [];
//                text.filter(x => {
//                               if (x.includes('#')) {
//                                              let word = x.substring(1)
//                                              result.push(word);
//                               };
//                });
//                for (const token of result) {
//                               if (/^[a-zA-Z]/.test(token)) {
//                                              console.log(token)
//                               }
//                }
// }

function modernTimeOfHashTag(text){
               text = text.split(' ');
               const result = [];

               for(let token of text){
                              if(token.includes('#') && token.length > 0){  
                                             let word = token.substring(1)
                                             let hashTag = word.charCodeAt(0)
                                             if(hashTag >= 65 && hashTag <= 90 || hashTag >= 97 && hashTag <= 122)
                                             result.push(word);
                              }
               }
               result.forEach(el => console.log(el));
}
modernTimeOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');