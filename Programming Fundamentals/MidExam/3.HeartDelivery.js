function heartDelivery(array) {
               let listOfHearts = array.shift().split('@').map(Number);
               let houseIndex = 0;


               for (let line of array) {
                              if (line === 'Love!') {
                                             break;
                              }
                              let commands = line.split(' ');

                              let jump = Number(commands[1]);
                              houseIndex += jump;
                              if (houseIndex >= listOfHearts.length) {
                                             houseIndex = 0;
                              }


                              if (listOfHearts[houseIndex] <= 0) {
                                             console.log(`Place ${houseIndex} already had Valentine's day.`);
                              } else {
                                             listOfHearts[houseIndex] -= 2;
                                             if (listOfHearts[houseIndex] <= 0) {
                                                            console.log(`Place ${houseIndex} has Valentine's day.`);
                                             }

                              }

               }
               console.log(`Cupid's last position was ${houseIndex}.`)
               let suchess = 0;
               let failed = 0;
               for (let i = 0; i < listOfHearts.length; i++) {
                              if (listOfHearts[i] <= 0) {
                                             suchess++;
                              } else {
                                             failed++;
                              }
               }
               if (suchess === listOfHearts.length) {
                              console.log(`Mission was successful.`);
               } else {
                              console.log(`Cupid has failed ${failed} places.`)
               }

}
heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);

heartDelivery([
               '2@4@2', 'Jump 2',
               'Jump 2', 'Jump 8',
               'Jump 3', 'Jump 1',
               'Love!'
]);