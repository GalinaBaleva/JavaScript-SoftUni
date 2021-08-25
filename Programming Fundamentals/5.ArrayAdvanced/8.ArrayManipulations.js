function arrayManipulations(arr) {
               let beginArr = arr.shift()
                              .split(' ')
                              .map(Number);
               for (let i = 0; i < arr.length; i++) {
                              let current = arr[i].split(' ');
                              let command = current[0];
                              let digit = Number(current[1]);
                              if (command === "Add") {
                                             beginArr.push(digit);
                              } else if (command === "Remove") {
                                             beginArr = beginArr.filter(x => x !== digit);
                              } else if (command === "RemoveAt") {
                                             beginArr.splice(digit, 1);           
                              } else if (command === "Insert") {
                                             let indexOfInxert = Number(current[2]);
                                             beginArr.splice(indexOfInxert, 0, digit);         
                              }
               }
               console.log(beginArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])