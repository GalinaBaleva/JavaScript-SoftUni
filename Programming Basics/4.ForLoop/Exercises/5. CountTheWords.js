function countOfWords(text) {
               let inputString = text.toString().split(' ').length;
               if (inputString > 10) {
                              console.log(`The message is too long to be send! Has ${inputString} words.`)
               } else {
                              console.log(`The message was sent successfully!`)
               }
}
countOfWords(["This message has exactly eleven words. One more as it's allowed!"])
countOfWords(["This message has ten words and you can send it!"])