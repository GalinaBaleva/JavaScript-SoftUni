function coints(input) {
               let sumFromInput = Number(input[0]) * 100;

               let sumInCoins = Number(sumFromInput.toFixed())

               let totalSum = 0;
               let coints = 0
               while (sumInCoins !== 0) {
                              if (sumInCoins >= 200) {
                                             sumInCoins -= 200;
                                             totalSum  += 200;
                                             coints++;
                              } else if (sumInCoins <= 199 && sumInCoins >= 100) {
                                             sumInCoins -= 100;
                                             totalSum += 100;
                                             coints++;
                              } else if (sumInCoins <= 99 && sumInCoins >= 50) {
                                             sumInCoins -= 50;
                                             totalSum += 50;
                                             coints++;
                              } else if (sumInCoins <= 49 && sumInCoins >= 20) {
                                             sumInCoins -= 20;
                                             totalSum += 20;
                                             coints++;
                              } else if (sumInCoins <= 19 && sumInCoins >= 10) {
                                             sumInCoins -= 10;
                                             totalSum += 10;
                                             coints++;
                              } else if (sumInCoins <= 9 && sumInCoins >= 5) {
                                             sumInCoins -= 5;
                                             totalSum += 5;
                                             coints++;
                              } else if (sumInCoins <= 4 && sumInCoins >= 2) {
                                             sumInCoins -= 2;
                                             totalSum += 2;
                                             coints++;
                              } else if (sumInCoins < 2 && sumInCoins >= 1){
                                             sumInCoins -= 1;
                                             totalSum += 1;
                                             coints++;
                              } else{
                                             break;
                              }
                              
               }
               console.log(coints);
}
//coints(["1.23"])
//coints(["2"])
//coints(["0.56"])
coints(["2.73"])