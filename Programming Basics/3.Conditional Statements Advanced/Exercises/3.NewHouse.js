function newHouse(input) {
               let typeOfFlower = input[0];
               let countOfFlowers = Number(input[1]);
               let budget = Number(input[2]);

               let sum = 0;


               if (typeOfFlower === "Roses") {
                              sum = countOfFlowers * 5;
                              if (countOfFlowers > 80) {
                                             sum = sum * 0.90;
                              }
               } else if (typeOfFlower === "Dahlias") {
                              sum = countOfFlowers * 3.80;
                              if (countOfFlowers > 90) {
                                             sum = sum * 0.85;
                              }

               } else if (typeOfFlower === "Tulips") {
                              sum = countOfFlowers * 2.80;
                              if (countOfFlowers > 80) {
                                             sum = sum * 0.85;
                              }

               } else if (typeOfFlower === "Narcissus") {
                              sum = countOfFlowers * 3;
                              if (countOfFlowers < 120) {
                                             sum = sum * 1.15;
                              }

               } else if (typeOfFlower === "Gladiolus") {
                              sum = countOfFlowers * 2.5;
                              if (countOfFlowers < 80) {
                                             sum = sum * 1.20;
                              }
               }
               if (budget >= sum){
                              console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeOfFlower} and ${(budget - sum).toFixed(2)} leva left.`);
               } else {
                              console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
               }
}
newHouse(["Roses", "55", "250"])
newHouse(["Tulips", "88", "260"])
newHouse(["Narcissus", "119", "360"])