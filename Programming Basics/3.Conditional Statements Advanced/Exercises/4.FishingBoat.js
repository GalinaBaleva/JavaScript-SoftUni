function fishingBoat(input) {
               let budget = Number(input[0]);
               let season = input[1];
               let countOfMans = Number(input[2]);

               let sum = 0;

               if (countOfMans % 2 === 0) {
                              if (countOfMans <= 6) {
                                             switch (season) {
                                                            case "Spring": sum = (3000 * 0.90) * 0.95; break;
                                                            case "Summer": sum = (4200 * 0.90) * 0.95; break;
                                                            case "Autumn": sum = 4200 * 0.90; break;
                                                            case "Winter": sum = (2600 * 0.90) * 0.95; break;
                                             }
                              } else if (7 <= countOfMans && countOfMans <= 11) {
                                             switch (season) {
                                                            case "Spring": sum = (3000 * 0.85) * 0.95; break;
                                                            case "Summer": sum = (4200 * 0.85) * 0.95; break;
                                                            case "Autumn": sum = 4200 * 0.85; break;
                                                            case "Winter": sum = (2600 * 0.85) * 0.95; break;
                                             }
                              } else if (countOfMans >= 12) {
                                             switch (season) {
                                                            case "Spring": sum = (3000 * 0.75) * 0.95; break;
                                                            case "Summer": sum = (4200 * 0.75) * 0.95; break;
                                                            case "Autumn": sum = 4200 * 0.75; break;
                                                            case "Winter": sum = (2600 * 0.75) * 0.95; break;
                                             }
                              }
               } else {
                              if (countOfMans <= 6) {
                                             switch (season) {
                                                            case "Spring": sum = 3000 * 0.90; break;
                                                            case "Summer": sum = 4200 * 0.90; break;
                                                            case "Autumn": sum = 4200 * 0.90; break;
                                                            case "Winter": sum = 2600 * 0.90; break;
                                             }
                              } else if (7 <= countOfMans && countOfMans <= 11) {
                                             switch (season) {
                                                            case "Spring": sum = 3000 * 0.85; break;
                                                            case "Summer": sum = 4200 * 0.85; break;
                                                            case "Autumn": sum = 4200 * 0.85; break;
                                                            case "Winter": sum = 2600 * 0.85; break;
                                             }
                              } else if (countOfMans >= 12) {
                                             switch (season) {
                                                            case "Spring": sum = 3000 * 0.75; break;
                                                            case "Summer": sum = 4200 * 0.75; break;
                                                            case "Autumn": sum = 4200 * 0.75; break;
                                                            case "Winter": sum = 2600 * 0.75; break;
                                             }
                              }
               }
               if (budget >= sum) {
                              console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
               } else {
                              console.log(`Not enough money! You need ${(Math.abs(budget - sum).toFixed(2))} leva.`);
               }
}
//fishingBoat(["3000", "Summer", "11"])
//fishingBoat(["3600", "Autumn", "6"])
//fishingBoat(["2000", "Winter", "13"])
fishingBoat(["3600", "Autumn", "6"])


