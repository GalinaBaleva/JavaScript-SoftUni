function shootForTheWin(arrayOfStrings) {
               let array = arrayOfStrings.shift().toString().split(' ').map(Number);

               for (let i = 0; i < arrayOfStrings.length; i++) {
                              let current = arrayOfStrings[i];
                              if (current === 'End') {
                                             break;
                              }
                              current = Number(current);
                              if(current >= array.length){
                                             continue;
                              }
                              let temp = array[current];
                              array.splice(current, 1, -1);
                              for (let j = 0; j < array.length; j++) {
                                             let currentLine = array[j];
                                             if (currentLine > 0 && currentLine <= temp) {
                                                            let sum = temp + currentLine;
                                                            array.splice(j, 1, sum);
                                             } else if (currentLine > 0 && currentLine > temp) {
                                                            let sum = currentLine - temp;
                                                            array.splice(j, 1, sum);
                                             }
                              }

               }
               let shots = array.filter((a, b) => a < 0)


               console.log(`Shot targets: ${shots.length} -> ${array.join(' ')}`)

}
shootForTheWin(["24 50 36 70",
               "0",
               "4",
               "3",
               "1",
               "End"]);
shootForTheWin(["30 30 12 60 54 66",
               "5",
               "2",
               "4",
               "0",
               "End"]);