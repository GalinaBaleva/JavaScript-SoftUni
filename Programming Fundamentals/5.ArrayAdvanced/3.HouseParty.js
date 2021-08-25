function houseParty(arrStrings) {
               let newList = [];
               for (let i = 0; i < arrStrings.length; i++) {
                              let currentSliced = arrStrings[i].split(' ');
                              let name = currentSliced[0];
                              let command = currentSliced[2];
                              if (command === 'not') {
                                             if (newList.includes(name)) {

                                                            newList.splice(newList.indexOf(name), 1);
                                             } else {
                                                            console.log(`${name} is not in the list!`)
                                             }
                              } else {
                                             if (newList.includes(name)) {

                                                            console.log(`${name} is already in the list!`)
                                             } else {
                                                            newList.push(name);
                                             }
                              }
               }
               console.log(newList.join('\n'));
} 
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])