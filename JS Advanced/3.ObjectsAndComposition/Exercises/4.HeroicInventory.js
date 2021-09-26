function heroicInventory(array) {
               let result = [];

               while (array[0]) {
                              let [name, level, items] = array.shift().split(' / ');
                              result.push({
                                             name,
                                             level: Number(level),
                                             items: items ? items.split(', ') : [],
                              });
               }
               console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
               'Derek / 12 / BarrelVest, DestructionSword',
               'Hes / 1 / Desolator, Sentinel, Antara']);