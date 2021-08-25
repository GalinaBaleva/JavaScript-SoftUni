function stringSubstring(word, text) {
               text = text.toLocaleLowerCase().split(' ');
               let index = text.indexOf(word);

               if(index >= 0){
                              console.log(text[index]);
               } else {
                              console.log(`${word} not found!`)
               }
}

stringSubstring('javascript',
               'JavaScript is the best programming language');
stringSubstring('python',
               'JavaScript is the best programming language');