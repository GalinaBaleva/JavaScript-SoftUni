function rightPlace(word, liter, rightWord) {

               let res = word.replace('_', liter);
               let output = res === result ? 'Matched' : 'Not Matched';
               console.log(output)

               // let firstWord = '';
               // for (let i = 0; i < word.length; i++) {
               //                if (word[i] === '_') {
               //                               firstWord += liter;
               //                }else{
               //                               firstWord += word[i]
               //                }
               // }
               // if(firstWord === rightWord){
               //                console.log(`Matched`);
               // }else {
               //                console.log(`Not Matched`);
               // }

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');