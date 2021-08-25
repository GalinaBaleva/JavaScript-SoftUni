function aluminumJoinery(input) {
               let numOfWindows = Number(input[0]);
               let typeOfWindow = input[1];
               let deliveryType = input[2];

               let sum = 0;
               let percent = 0;
               let inTotal = 0;

               if (numOfWindows < 10) {
                              console.log(`Invalid order`);
                              return;
               }
               switch (typeOfWindow) {
                              case "90X130":
                                             if (numOfWindows >= 30 && numOfWindows <= 60) {
                                                            sum = 110 * numOfWindows
                                                            percent = (110 * numOfWindows * 0.05);
                                                            inTotal = sum - percent;


                                             } else if (numOfWindows > 60) {
                                                            sum = 110 * numOfWindows
                                                            percent = (110 * numOfWindows * 0.08);
                                                            inTotal = sum - percent;
                                             } else {
                                                            sum = 110 * numOfWindows;
                                             }
                                             break;
                              case "100X150":
                                             if (numOfWindows >= 40 && numOfWindows <= 80) {
                                                            sum = 140 * numOfWindows
                                                            percent = (140 * numOfWindows * 0.06);
                                                            inTotal = sum - percent;
                                             } else if (numOfWindows > 80) {
                                                            sum = 140 * numOfWindows
                                                            percent = (140 * numOfWindows * 0.10);
                                                            inTotal = sum - percent;
                                             } else {
                                                            sum = 140 * numOfWindows;
                                             }
                                             break;
                              case "130X180":
                                             if (numOfWindows >= 20 && numOfWindows <= 50) {
                                                            sum = 190 * numOfWindows
                                                            percent = (190 * numOfWindows * 0.07);
                                                            inTotal = sum - percent;
                                             } else if (numOfWindows > 50) {
                                                            sum = 190 * numOfWindows
                                                            percent = (190 * numOfWindows * 0.12);
                                                            inTotal = sum - percent;
                                             } else {
                                                            sum = 190 * numOfWindows;
                                             }
                                             break;
                              case "200X300":
                                             if (numOfWindows >= 25 && numOfWindows <= 50) {
                                                            sum = 250 * numOfWindows
                                                            percent = (250 * numOfWindows * 0.09);
                                                            inTotal = sum - percent;
                                             } else if (numOfWindows > 50) {
                                                            sum = 250 * numOfWindows
                                                            percent = (250 * numOfWindows * 0.14);
                                                            inTotal = sum - percent;
                                             } else {
                                                            sum = 250 * numOfWindows;
                                             }
                                             break;

               }
               let total = 0;
               let totalPercent = 0;
               if (numOfWindows >= 99) {
                              if (deliveryType === "With delivery") {
                                             total = (inTotal + 60);
                                             totalPercent = total * 0.04
                                             console.log(`${(total - totalPercent).toFixed(2)} BGN`)

                              }
               } else {
                              console.log(`${(inTotal).toFixed(2)} BGN`)
               }
}
aluminumJoinery(["40", "90X130", "Without delivery"])
aluminumJoinery(["105",
               "100X150",
               "With delivery"])
aluminumJoinery(["2", "130X180", "With delivery"])