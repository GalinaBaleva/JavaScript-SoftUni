function solve(input) {

               let index = 0;
               let target = Number(input[index++]);
               let command = input[index];

               let totalSum = 0;

               while (command !== "closed") {
                              let currentCommand = command;
                              index++;
                              if (currentCommand === "haircut") {
                                             let typeHaircut = input[index];

                                             switch (typeHaircut) {
                                                            case "mens": totalSum += 15; break;
                                                            case "ladies": totalSum += 20; break;
                                                            case "kids": totalSum += 10; break;
                                             }

                              } else if (currentCommand === "color") {
                                             let typeColor = input[index];
                                             switch (typeColor) {
                                                            case "touch up": totalSum += 20; break;
                                                            case "full color": totalSum += 30; break;
                                             }
                              }
                              if (totalSum >= target) {
                                             break;
                              }

                              index++;
                              command = input[index];
               }
               if (totalSum >= target) {
                              console.log(`You have reached your target for the day!`);
                              console.log(`Earned money: ${totalSum}lv.`);

               } else {
                              console.log(`Target not reached! You need ${Math.abs(target - totalSum)}lv. more.`);
                              console.log(`Earned money: ${totalSum}lv.`);
               }
}
//solve (["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"])
solve(["50", "color", "full color", "haircut", "ladies"])