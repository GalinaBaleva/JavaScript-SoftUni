function piccolo(arrOfStrings) {
               let parkingLot = {};

               for (let command of arrOfStrings) {
                              let [direction, carNumber] = command.split(', ');

                              if(direction=== 'IN' && parkingLot.hasOwnProperty(carNumber)){
                                             continue;
                              }
                              if(direction === 'IN'){
                                             parkingLot[carNumber] = 1;
                              } else {
                                             delete parkingLot[carNumber]
                              }
               }

               let sorted = Array.from(Object.keys(parkingLot)).sort((a,b) => a.localeCompare(b)).join('\n');
               console.log(sorted)

}
piccolo(['IN, CA2844AA',
               'IN, CA1234TA',
               'OUT, CA2844AA',
               'IN, CA9999TT',
               'IN, CA2866HI',
               'OUT, CA1234TA',
               'IN, CA2844AA',
               'OUT, CA2866HI',
               'IN, CA9876HH',
               'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
               'IN, CA1234TA',
               'OUT, CA2844AA',
               'OUT, CA1234TA']);