function backToThePast(input) {

               let inheritedMoney = Number(input[0]);
               let yearTolive = Number(input[1]);
               let age = 18;

               for (let curentYear = 1800; curentYear <= yearTolive; curentYear++) {

                              if (curentYear % 2 === 0) {
                                             inheritedMoney -= 12000;
                              } else {
                                             inheritedMoney -= 12000 + 50 * age;
                              }
                              age++;
               }

               if (inheritedMoney >= 0) {
                              console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`)
               } else {
                              console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`)
               }
}
backToThePast(["50000", "1802"])
backToThePast(["100000.15", "1808"])