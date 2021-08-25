function countOfWords(text) {
               let inputString = text[0].split(' ');
               let lengthOfText = 0;

               for (let i = 0; i < inputString.length; i++) {
                              if (text[i] !== '') {
                                             lengthOfText++;
                              }

               } if (lengthOfText > 10) {
                              console.log(`The message is too long to be send! Has ${lengthOfText} words.`)
               } else {
                              console.log(`The message was sent successfully!`)
               }
}
countOfWords(["This message has exactly eleven words. One more as it's allowed!"])
countOfWords(["This message has ten words and you can send it!"])