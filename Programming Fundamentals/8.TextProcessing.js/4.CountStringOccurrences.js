function countStringOccurrences(text, word){
               let counter = 0;
               let splitedText = text.split(' ');
               for(let info of splitedText){
                              if(info === word){
                                             counter++;
                              }
               }
               console.log(counter)
}
countStringOccurrences("This is a word and it also is a sentence", "is");
