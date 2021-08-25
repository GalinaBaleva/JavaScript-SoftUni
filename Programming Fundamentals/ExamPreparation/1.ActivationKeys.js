function activationKeys(stringLine) {
               let result = stringLine.shift();

               while (stringLine != 'Generate') {
                              let [command, ...tokens] = stringLine.shift().split('>>>');
                              if (command === 'Contains') {
                                             let substring = tokens;
                                             let pattern = new RegExp(tokens, 'g');
                                             if (result.includes(tokens)) {
                                                            console.log(`${result} contains ${substring}`);
                                             } else {
                                                            console.log(`Substring not found!`);
                                             }
                              } else if (command === 'Flip') {
                                             let [uperLower, start, end] = tokens;
                                             start = Number(start);
                                             end = Number(end);

                                             if (uperLower === 'Upper') {
                                                            let leftPart = result.substring(0, start);
                                                            let midlle = result.substring(start, end).toLocaleUpperCase();
                                                            let rightPart = result.substring(end);

                                                            result = leftPart + midlle + rightPart;

                                             } else if (uperLower === 'Lower') {
                                                            let leftPart = result.substring(0, start);
                                                            let midlle = result.substring(start, end).toLocaleLowerCase();
                                                            let rightPart = result.substring(end);

                                                            result = leftPart + midlle + rightPart;
                                             }
                                             console.log(result)
                              } else if (command === 'Slice') {
                                             let [start, end] = tokens;
                                             start = Number(start);
                                             end = Number(end);

                                             let leftPart = result.substring(0, start);
                                             let rightPart = result.substring(end);

                                             result = leftPart + rightPart;
                                             console.log(result);
                                             // Deletes the characters between the start and end indices (end index is exclusive).
                                             // Both indices will be valid.
                                             // Prints the activation key.
                              }
               }
               console.log(`Your activation key is: ${result}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
               "Slice>>>2>>>6",
               "Flip>>>Upper>>>3>>>14",
               "Flip>>>Lower>>>5>>>7",
               "Contains>>>def",
               "Contains>>>deF",
               "Generate"]);
console.log(`-----------------------`)
activationKeys(["134softsf5ftuni2020rockz42",
               "Slice>>>3>>>7",
               "Contains>>>-rock",
               "Contains>>>-uni-",
               "Contains>>>-rocks",
               "Flip>>>Upper>>>2>>>8",
               "Flip>>>Lower>>>5>>>11",
               "Generate"])