function signCheck(a, b, c) {

               if ((a >= 0 && b >= 0) || (a <= 0 && b <= 0)) {
                              if (c > 0) {
                                             console.log(`Positiv`);
                              } else {
                                             console.log(`Negative`);
                              }
               } else {
                              if(c > 0){
                                             console.log(`Negative`);
                              } else {
                                             console.log(`Positive`);
                              }
                              
               }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);