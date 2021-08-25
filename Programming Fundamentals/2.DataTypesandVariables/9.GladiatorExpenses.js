function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){
               let sum = 0;
               let shieldBreak = 0;
               for(let i = 1; i <= lostFights; i++){
                              if(i % 2 === 0){
                                             sum += helmetPrice;
                              }
                              if(i % 3 === 0){
                                             sum += swordPrice;
                              }
                              if(i % 2 === 0 && i % 3 === 0){
                                             sum += shieldPrice;
                                             shieldBreak++
                                             if(shieldBreak % 2 === 0){
                                                            sum += armourPrice
                                             }
                              }
               }
               console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);