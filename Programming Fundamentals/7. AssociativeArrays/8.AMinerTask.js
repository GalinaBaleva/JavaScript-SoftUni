function aMinerTask(array) {
               let minerObj = {};

               for (let i = 0; i < array.length - 1; i += 2) {
                              let resource = array[i];
                              let quantity = Number(array[i + 1]);

                              if (!minerObj.hasOwnProperty(resource)) {
                                             minerObj[resource] = [];
                              }

                              minerObj[resource].push(quantity);
               }

               for (let [resource, quantity] of Object.entries(minerObj)) {
                              let sum = quantity.reduce((x, y) => x + y);
                              console.log(`${resource} -> ${sum}`)
               }
}
aMinerTask([
               'Gold',
               '155',
               'Silver',
               '10',
               'Copper',
               '17'
]);
aMinerTask([
               'gold',
               '155',
               'silver',
               '10',
               'copper',
               '17',
               'gold',
               '15'
]);