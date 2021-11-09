function listProcessor(array) {
               let innerCollection = [];

               let func = {
                              add: (s) => innerCollection.push(s),
                              remove: (s) => innerCollection.forEach((el, i) => {
                                             if (el === s) {
                                                            innerCollection.splice(i, 1)
                                             }
                              }),
                              print: (array) => {
                                             let jointArry = array.join(',');
                                             console.log(jointArry);
                              },
               }
               for (let input of array) {
                              let [command, word] = input.split(' ');
                              if (word != undefined) {
                                             func[command].call(0, word)
                              } else {
                                             func[command].call(0, innerCollection);
                              }
               }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);