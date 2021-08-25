function muOnline(array){

               
               let splitedArray = array.split('|');

               let health = 100;
               let bitcoins = 0;
               let room = 0;
               for(let i = 0; i < splitedArray.length; i++){
                              let tokens = splitedArray[i].split(' ');
                              let command = tokens[0];
                              let points = Number(tokens[1]);
                              room++;

                              if(command === 'potion'){
                                             let sumHealth = health + points;

                                             if(sumHealth > 100){
                                                            health = 100;
                                                            let amountHealth = points - (sumHealth - 100)
                                                            console.log(`You healed for ${amountHealth} hp.`)
                                             } else {
                                                            health = sumHealth;
                                                            console.log(`You healed for ${points} hp.`)
                                             }
                                             console.log(`Current health: ${health} hp.`)
                              } else if(command === 'chest'){
                                             bitcoins += points;
                                             console.log(`You found ${points} bitcoins.`);
                              } else {
                                             health -= points;
                                             if(health > 0){
                                                            console.log(`You slayed ${command}.`);
                                             } else {
                                                            console.log(`You died! Killed by ${command}.`);
                                                            console.log(`Best room: ${room}`);
                                                            return;
                                             }
                              }
                              if (i === splitedArray.length - 1) {
                                             console.log(`You've made it!`);
                                             console.log(`Bitcoins: ${bitcoins}`);
                                             console.log(`Health: ${health}`);
                              }
               }
}
muOnline(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
muOnline(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
