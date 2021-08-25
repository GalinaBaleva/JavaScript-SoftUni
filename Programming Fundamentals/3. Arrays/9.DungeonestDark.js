function dungeonesDark(array) {
               let splitedArray = array[0];
               let arrayList = splitedArray.split('|');
               let health = 100;
               let coins = 0;
               let room = 0;

               for (let i = 0; i < arrayList.length; i++) {

                              let finishArray = arrayList[i];
                              finishArray = finishArray.split(' ');
                              let comandName = finishArray[0];
                              let points = Number(finishArray[1]);
                              room++;
                              if (comandName === 'potion') {
                                             let sumHealth = health + points;
                                             if (sumHealth > 100) {
                                                            health = 100
                                                            points = points - (sumHealth - 100);
                                                            console.log(`You healed for ${points} hp.`);

                                             } else {
                                                            health = sumHealth;
                                                            console.log(`You healed for ${points} hp.`);
                                             }

                                             console.log(`Current health: ${health} hp.`);
                              } else if (comandName === 'chest') {
                                             coins += points;
                                             console.log(`You found ${points} coins.`);
                              } else {
                                             health -= points;
                                             if (health > 0) {
                                                            console.log(`You slayed ${comandName}.`);

                                             } else {
                                                            console.log(`You died! Killed by ${comandName}.`);
                                                            console.log(`Best room: ${room}`);
                                                            return;
                                             }


                              }
                              if (i === arrayList.length - 1) {
                                             console.log(`You've made it!`);
                                             console.log(`Coins: ${coins}`);
                                             console.log(`Health: ${health}`);
                              }
               }
}
//dungeonesDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonesDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);