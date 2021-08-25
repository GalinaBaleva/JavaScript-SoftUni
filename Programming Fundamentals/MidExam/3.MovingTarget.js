function movingTarget(arrayOfStrings) {
               let numbers = arrayOfStrings.shift().toString().split(' ').map(Number);

               let index = 0;

               while (arrayOfStrings[index] !== 'End') {
                              let current = arrayOfStrings[index].split(' ');
                              let command = current[0];

                              if (command === 'Shoot') {
                                             let neededIndex = Number(current[1]);
                                             let power = Number(current[2]);
                                             if (neededIndex >= 0 && neededIndex < numbers.length) {
                                                            numbers[neededIndex] -= power
                                                            if (numbers[neededIndex] <= 0) {
                                                                           numbers.splice(neededIndex, 1);
                                                            }
                                             }
                              } else if (command === 'Add') {
                                             let addIndex = Number(current[1]);
                                             let value = Number(current[2]);
                                             if (addIndex >= 0 && addIndex < numbers.length) {
                                                            numbers.splice(addIndex, 0, value);
                                             } else {
                                                            console.log(`Invalid placement!`)
                                             }
                              } else if (command === 'Strike') {
                                             let strikeIndex = Number(current[1]);
                                             let radius = Number(current[2]);
                                             if (strikeIndex - radius >= 0 && strikeIndex + radius < numbers.length - 1) {
                                                            numbers.splice(strikeIndex - radius, radius * 2 + 1);
                                             } else {
                                                            console.log(`Strike missed!`)
                                             }
                              }
                              index++;
                              current = arrayOfStrings[index];
               }
               console.log(numbers.join('|'))
}

// movingTarget(["52 74 23 44 96 110",
//                "Shoot 5 10",
//                "Shoot 1 80",
//                "Strike 2 1",
//                "Add 22 3",
//                "End"]);
movingTarget(["1 2 3 4 5",
               "Strike 0 1",
               "End"]);
