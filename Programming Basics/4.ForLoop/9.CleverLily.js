function cleverLily(input) {
               let ages = Number(input[0]);
               let washingmashinPrice = Number(input[1]);
               let toysPrice = Number(input[2]);

               let savedMoney = 0;


               for (let i = 1; i <= ages; i++) {
                              if (i % 2 == 0) {
                                             savedMoney += i * 5// годините й * по 5. 2*5=10 4*5=20... //(10 * i / 2;) също решение
                                             savedMoney--;
                              } else {
                                             savedMoney += toysPrice;
                              }
               } if (savedMoney >= washingmashinPrice) {
                              console.log(`Yes! ${Math.abs(savedMoney - washingmashinPrice).toFixed(2)}`);
               } else {
                              console.log(`No! ${Math.abs(washingmashinPrice - savedMoney).toFixed(2)}`)
               }

}

cleverLily(["10", "170", "6"])
cleverLily(["21", "1570.98", "3"])