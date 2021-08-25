function train(input) {
               let arraiWithWagons = input.shift().split(' ').map(Number); 

               let maxCapacitiInWagon = Number(input.shift());

               for (let command of input) {
                              let currentCommand = command.split(' ');

                              if (currentCommand[0] === 'Add') {
                                             arraiWithWagons.push(currentCommand[1]);
                              } else {

                                             for (let i = 0; i < arraiWithWagons.length; i++) {
                                                            let passengersToAdd = Number(currentCommand[0]) + arraiWithWagons[i];
                                                            if (passengersToAdd <= maxCapacitiInWagon) {
                                                                           arraiWithWagons[i] += Number(currentCommand[0]);
                                                                           break;
                                                            }
                                             }
                              }
               }
               console.log(arraiWithWagons.join(' '));
}
train(['32 54 21 12 4 0 23',
               '75',
               'Add 10',
               'Add 0',
               '30',
               '10',
               '75'
])
train(['0 0 0 10 2 4',
               '10',
               'Add 10',
               '10',
               '10',
               '10',
               '8',
               '6'
])