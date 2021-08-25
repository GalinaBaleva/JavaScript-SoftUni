function arrayManipulator(numbers, commands) {
               for (let i = 0; i < commands.length; i++) {
                              let command = commands[i].split(' ');
                              let firstCommand = Number(command[1]);
                              if (command[0] === 'add') {
                                             numbers.splice(firstCommand, 0, Number(command[2]));

                              } else if (command[0] === 'addMany') {
                                             let index = firstCommand;
                                             command.splice(0, 2);
                                             numbers.splice(index, 0, ...command);

                              } else if (command[0] === 'contains') {
                                             let wishedNumber = numbers.indexOf(firstCommand);
                                             console.log(wishedNumber);

                              } else if (command[0] === 'remove') {
                                             numbers.splice(firstCommand, 1);

                              } else if (command[0] === 'shift') {
                                             for (let j = 0; j < firstCommand; j++) {
                                                            let temp = numbers.shift();
                                                            numbers.push(temp);
                                             }
                              } else if (command[0] === 'sumPairs') {
                                             let newArr = [];
                                             if (numbers.length % 2 !== 0) {
                                                            numbers.push(0)
                                             }
                                             for (let j = 0; j < numbers.length - 1; j += 2) {
                                                            let firstNum = Number(numbers[j]);
                                                            let secondNum = Number(numbers[j + 1]);
                                                            let sum = firstNum + secondNum;
                                                            newArr.push(sum);
                                             }
                                             numbers = newArr;
                                             
                              } else if (command[0] === 'print') {
                                             console.log(`[ ${numbers.join(', ')} ]`)
                              }
               }
}
arrayManipulator([0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
               ["sumPairs", 'print'])
// arrayManipulator([1, 2, 4, 5, 6, 7],
               // ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5],
               //['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);