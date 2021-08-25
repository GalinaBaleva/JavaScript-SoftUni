function inventory(arrayOfheroes) {
               let heroesList = [];

               for (let heroesInfo of arrayOfheroes) {
                              let [name, level, items] = heroesInfo.split(' / ');
                              level = Number(level);
                              items = items.split(', ');

                              let heroesObj = {
                                             name,
                                             level,
                                             items,
                              }
                              heroesList.push(heroesObj);
               }


               heroesList.sort((a, b) => a.level - b.level);

               for (let heroes of heroesList) {
                              console.log(`Hero: ${heroes.name}`);
                              console.log(`level => ${heroes.level}`);
                              console.log(`items => ${heroes.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
               }
}
inventory([
               "Isacc / 25 / Apple, GravityGun",
               "Derek / 12 / BarrelVest, DestructionSword",
               "Hes / 1 / Desolator, Sentinel, Antara"
]);