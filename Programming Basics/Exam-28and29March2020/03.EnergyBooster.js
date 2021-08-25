function energyBooster(input) {
               let typeOfFruit = input[0];
               let size = input[1];
               let pacsNum = Number(input[2]);

               let sum = 0;

               switch (typeOfFruit) {
                              case "Watermelon": if (size === "small") {
                                             sum = pacsNum * (56 * 2);
                              } else {
                                             sum = pacsNum * (28.70 * 5);
                              }
                                             break;
                              case "Mango": if (size === "small") {
                                             sum = pacsNum * (36.66 * 2);
                              } else {
                                             sum = pacsNum * (19.60 * 5);
                              }
                                             break;
                              case "Pineapple": if (size === "small") {
                                             sum = pacsNum * (42.10 * 2);
                              } else {
                                             sum = pacsNum * (24.80 * 5);
                              }
                                             break;
                              case "Raspberry": if (size === "small") {
                                             sum = pacsNum * (20 * 2);
                              } else {
                                             sum = pacsNum * (15.20 * 5);
                              }
                                             break;
               }
               if (sum >= 400 && sum <= 1000) {
                              sum = sum - (sum * 0.15)
                              console.log(`${sum.toFixed(2)} lv.`);
               } else if (sum > 1000) {
                              sum = sum - (sum * 0.5)
                              console.log(`${sum.toFixed(2)} lv.`);
               } else {
                              console.log(`${sum.toFixed(2)} lv.`);
               }
}
energyBooster(["Watermelon",
               "big",
               "4"])
energyBooster(["Pineapple",
               "small",
               "1"])
energyBooster(["Raspberry",
               "small",
               "50"])
energyBooster(["Mango",
               "big",
               "8"])