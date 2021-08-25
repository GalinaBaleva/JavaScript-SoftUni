function revealWords(wordsString, text){
               wordsString = wordsString.split(', ');
               text = text.toString().split(' ');
               let result = [];

               for(let word of text){
                              let current = word;
                              if(word.includes('*')){
                                             for(let stringWord of wordsString){
                                                            if(current.length === stringWord.length){
                                                                           current = stringWord;
                                                            }
                                             }
                              }
                              result.push(current);
               }
               console.log(result.join(' '));           
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

function revealWords(words, sentance) {
               words = words.split(', ');
               sentance = sentance.split(' ');
            
               for (const iterator of words) {
                   sentance.filter(x => {
                       if (x === '*'.repeat(iterator.length)) {
                           sentance[sentance.indexOf(x)] = iterator;
                       }
                   });
               }
               console.log(sentance.join(' '));
           }