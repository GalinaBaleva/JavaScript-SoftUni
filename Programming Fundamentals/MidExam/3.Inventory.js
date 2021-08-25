function inventory(array) {
               let items = array.shift().split(', ')

               for (let commands of array) {
                              let command = commands.split(' - ')
                              if (command[0] === 'Craft!') {
                                             break;
                              } else if (command[0] === 'Collect') {
                                             let index = items.indexOf(command[1]);
                                             if (index < 0) {
                                                            items.push(command[1]);
                                             }
                              } else if (command[0] === 'Drop') {
                                             let index = items.indexOf(command[1]);
                                             if (index >= 0) {
                                                            items.splice(index, 1);
                                             }
                              } else if (command[0] === 'Combine Items') {
                                             let comineCommand = command[1].split(':');
                                             let index = items.indexOf(comineCommand[0]);
                                             if (index >= 0) {
                                                            items.splice(index + 1, 0, comineCommand[1]);
                                             }

                              } else if (command[0] === 'Renew') {
                                             let index = items.indexOf(command[1]);
                                             if (index >= 0) {
                                                            items.splice(index, 1);
                                                            items.push(command[1]);
                                             }
                              }
               }

               console.log(items.join(', '));
}
inventory(['Iron, Wood, Sword',
               'Collect - Gold',
               'Drop - Wood',
               'Craft!']);
inventory(['Iron, Sword',
               'Drop - Bronze',
               'Combine Items - Sword:Bow',
               'Renew - Iron',
               'Craft!']);
