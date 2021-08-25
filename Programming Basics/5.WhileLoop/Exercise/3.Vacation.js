function vacation(input) {
               let neededMoney = Number(input[0]);
               let availableMoney = Number(input[1]);
               let command = input[2];
               let sumFromCommand = Number(input[3]);
               let index = 4;

               let days = 0;
               let daysSpend = 0;
               let totalSavedMoney = 0;

               while (command === "spend" || command === "save") {

                              if (command === "spend") {
                                             days++;
                                             daysSpend++;
                                             if (sumFromCommand >= availableMoney) {
                                                            totalSavedMoney = 0;
                                             } else {
                                                            availableMoney = availableMoney - sumFromCommand;
                                             }
                                             if (daysSpend === 5) {
                                                            console.log(`You can't save the money.`);
                                                            console.log(`${days}`);
                                                            return;
                                             }
                              } else if (command === "save") {
                                             days++;
                                             daysSpend = 0;
                                             totalSavedMoney += sumFromCommand + availableMoney;
                              }

                              command = input[index];
                              index++;
                              sumFromCommand = Number(input[index]);
                              index++;
               }
               if (totalSavedMoney >= neededMoney) {
                              console.log(`You saved the money for ${days} days.`);
               }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"])
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])
vacation(["110", "60", "spend", "10", "spend", "10", "save", "100", "spend", "10", "spend", "10", "spend", "10"])