function cards(arr) {
               let line = arr.shift().toString().split(':');

               let index = 0;
               let current = arr[index];

               let newArr = []

               while (current !== 'Ready') {
                              current = arr[index].split(' ');
                              let command = current[0];
                              if (command === 'Add') {
                                             let indexCard = line.indexOf(current[1]);
                                             if (indexCard >= 0) {
                                                            let temp = line[indexCard];
                                                            newArr.push(temp);
                                             } else {
                                                            console.log(`Card not found.`)
                                             }

                              } else if (command === 'Insert') {
                                             let indexCard = line.indexOf(current[1]);
                                             let newIndex = Number(current[2]);
                                             if (indexCard >= 0 && newIndex >= 0 && newIndex < newArr.length) {
                                                            newArr.splice(newIndex, 0, current[1]);
                                                            
                                             } else {
                                                            console.log(`Error!`);
                                             }
                              } else if (command === 'Remove') {
                                             let indexCard = newArr.indexOf(current[1]);
                                             if (indexCard >= 0) {
                                                            newArr.splice(indexCard, 1);
                                             } else {
                                                            console.log(`Card not found.`)
                                             }
                              } else if (command === 'Swap') {
                                             let indexFirst = newArr.indexOf(current[1]);
                                             let indexSecond = newArr.indexOf(current[2]);
                                             newArr.splice(indexFirst, 1, current[2]);
                                             newArr.splice(indexSecond, 1, current[1]);

                              } else if (command === 'Shuffle') {
                                             newArr.reverse()
                              }
                              index++;
                              current = arr[index];
               }
               console.log(newArr.join(' '));


}

cards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
               "Add Moonfire",
               "Add Pounce",
               "Add Bite",
               "Add Wrath",
               "Insert Claw 0",
               "Swap Claw Moonfire",
               "Remove Bite",
               "Shuffle deck",
               "Ready"])
cards(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
               "Add Pop",
               "Add Exodia",
               "Add Aso",
               "Remove Wrath",
               "Add SineokBqlDrakon",
               "Shuffle deck",
               "Insert Pesho 0",
               "Ready"])