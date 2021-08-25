function careOfpuppy(input) {
               let index = 0;
               let foodGr = Number(input[index] * 1000);
               index++
               let eatedFoof = Number(input[index]);


               while (eatedFoof !== "Adopted") {
                              let currendFood = Number(eatedFoof);
                              foodGr -= currendFood;

                              index++;
                              eatedFoof = input[index];

               }
               if (foodGr >= 0) {
                              console.log(`Food is enough! Leftovers: ${foodGr} grams.`);
               } else {
                              console.log(`Food is not enough. You need ${Math.abs(foodGr)} grams more.`)
               }
}
careOfpuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"])
careOfpuppy(["3", "1000", "1000", "1000", "Adopted"])
careOfpuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"])