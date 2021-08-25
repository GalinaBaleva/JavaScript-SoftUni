function theInitationGame(arr) {
               let word = arr.shift();

               while (arr != 'Decode') {
                              let [command, ...commands] = arr.shift().split('|');

                              if (command === 'Move') {
                                             let n = Number(commands[0]);
                                             let moving = word.split('');

                                             for (let i = 0; i < n; i++){
                                                            let letter = moving.splice(0, 1);

                                                            moving.push(letter);
                                             }
                                             word = moving.join('')

                              } else if (command === 'Insert') {
                                             let index = Number(commands[0]);
                                             let value = commands[1];
                                             let inserting = word.toString().split('');

                                             inserting.splice(index, 0, value);
                                             word = inserting.join('');
                                             

                              } else if (command === 'ChangeAll') {
                                             let oldLetter = commands[0];
                                             let newLetter = commands[1];

                                             let currentWord = word.toString().split('')

                                             currentWord.forEach(el => {
                                                            if (el === oldLetter) {
                                                                           let index = currentWord.indexOf(oldLetter)
                                                                           currentWord.splice(index, 1, newLetter)

                                                            }
                                                            
                                             });
                                             word = currentWord.join('');


                              }
               }
               console.log(`The decrypted message is: ${word}`)
}
theInitationGame([
               'zzHe',
               'ChangeAll|z|l',
               'Insert|2|o',
               'Move|3',
               'Decode'
]);
theInitationGame([
               'owyouh',
               'Move|2',
               'Move|3',
               'Insert|3|are',
               'Insert|9|?',
               'Decode'
]);