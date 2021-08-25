function bestPlayer(input) {

               let nameOfPlayr = input[0];
               let numberOfgoals = Number(input[1]);
               let index = 2;

               let bestPlayerGoals = Number.MIN_SAFE_INTEGER;
               let bestPlayer = 0;

               while (true) {
                              if (numberOfgoals > bestPlayerGoals) {
                                             bestPlayerGoals = numberOfgoals;
                                             bestPlayer = nameOfPlayr
                              }
                              nameOfPlayr = input[index];
                              index++;
                              numberOfgoals = Number(input[index]);
                              index++;
                              if (nameOfPlayr === "END") {
                                             console.log(`${bestPlayer} is the best player!`);
                                             if (bestPlayerGoals >= 3) {
                                                            console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
                                                            break;
                                             } else {
                                                            console.log(`He has scored ${bestPlayerGoals} goals.`);
                                                            break;
                                             }
                              } else if (bestPlayerGoals >= 10) {
                                             console.log(`${bestPlayer} is the best player!`);
                                             console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
                                             break;
                              }
               }
}
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"])
