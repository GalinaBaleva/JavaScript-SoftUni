function counterStrike(array) {
               
               let energy = Number(array.shift());

               let wonBattles = 0;


               for (let i = 0; i < array.length; i++) {
                              let currentDistance = array[i];
                              if (currentDistance === 'End of battle') {
                                             break;
                              } else {
                                             currentDistance = Number(array[i]);
                              }
                              if (energy < currentDistance) {
                                             console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
                                             return;
                              } else {
                                             wonBattles++;
                                             energy -= currentDistance;
                                             if (wonBattles % 3 === 0 && wonBattles !== 0) {
                                                            energy += wonBattles;
                                             }
                              }

               }
               console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);

}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);

