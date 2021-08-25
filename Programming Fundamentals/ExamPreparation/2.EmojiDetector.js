function emojiDetector(string) {
               let pattern = /([:|*]{2})(?<emoji>[A-Z][a-z]+[a-z])\1/g;
               let pattern2 = /\d/g;
               let patternSplit = /[:|*]/;

               let coolnes = string.toString().match(pattern2).map(Number);
               coolnes = coolnes.reduce((x, y) => x * y);

               let emojis = string.toString().match(pattern);
               let obj = {};
               for (let emoji of emojis) {
                              let currentEm = emoji.split(patternSplit)
                              let em = currentEm[2];
                              let sum = 0
                              for (let letter of em) {
                                             let current = letter.charCodeAt();
                                             sum += current;
                              }
                              obj[emoji] = sum;
               }
               let result = [];
               let sorted = Object.entries(obj).forEach(el => {
                              if (el[1] >= coolnes) {
                                             result.push(el[0])
                              }
               }
               )
               console.log(`Cool threshold: ${coolnes}`);
               console.log(`${emojis.length} emojis found in the text. The cool ones are:`)
               for(let emoji of result){
                              console.log(emoji);
               }




}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log(`----------------------`)
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log(`----------------------`)
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])