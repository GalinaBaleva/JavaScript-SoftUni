function sumAndProduct(input) {
               let num = input[0];

               for (let a = 1; a <= 9; a++) {
                              for (let b = 9; b >= a; b--){
                                             for(let c = 0; c <= 9; c++){
                                                            for(let d = 9; d >= c; d--){
                                                                           let num1 = a+b+c+d;
                                                                           let  num2 = a * b * c * d;
                                                                           if(num1 === num2 && num % 10 == 5)  {
                                                                                          console.log(`${a}${b}${c}${d}`);
                                                                                          return;
                                                                           } else if (Math.trunc(num2 / num1) == 3 && num % 3 === 0 )   {
                                                                                          console.log(`${d}${c}${b}${a}`);
                                                                                          return;
                                                                           }                         
                                                            }
                                             }
                              }
               }
               console.log(`Nothing found`);
}
sumAndProduct(["123"])
sumAndProduct(["145"])
sumAndProduct(["214"])