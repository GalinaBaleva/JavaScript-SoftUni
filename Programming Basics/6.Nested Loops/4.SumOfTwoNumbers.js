function sumOfTowNumbers(input) {
               let begin = Number(input[0])
               let finish = Number(input[1]);
               let magicNumber = Number(input[2]);

               let isTrue = false;

               let totalCombinations = 0;
               let sum = 0;

               for (let x = begin; x <= finish; x++) {
                              for (let y = begin; y <= finish; y++) {
                                             sum = x + y
                                             totalCombinations++;
                                             if (sum === magicNumber) {
                                                            console.log(`Combination N:${totalCombinations} (${x} + ${y} = ${magicNumber})`);
                                                            isTrue = true;
                                                            return;
                                             }
                              }
               }

               console.log(`${totalCombinations} combinations - neither equals ${magicNumber}`);
}
sumOfTowNumbers(["23", "24", "20"])