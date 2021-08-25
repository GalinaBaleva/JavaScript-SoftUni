function foodForPets(input) {
               let index = 0;
               let numDays = Number(input[index++]);
               let totalFood = Number(input[index++]);

               let totalForDog = 0;
               let totalForCat = 0;
               let biscuits = 0;

               for (let i = 1; i <= numDays; i++) {
                              let currentDogsFood = Number(input[index++]);
                              let currentCatsFood = Number(input[index++]);
                              totalForDog += currentDogsFood;
                              totalForCat += currentCatsFood;
                              if (i % 3 === 0) {
                                             biscuits += (currentDogsFood + currentCatsFood) * 0.10;
                              }
               }
               let totalEatedFood = totalForDog + totalForCat;

               console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
               console.log(`${((totalEatedFood * 100) / totalFood).toFixed(2)}% of the food has been eaten.`);
               console.log(`${((totalForDog * 100) / totalEatedFood).toFixed(2)}% eaten from the dog.`);
               console.log(`${((totalForCat * 100) / totalEatedFood).toFixed(2)}% eaten from the cat.`);
}
// foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"])
// foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"])
foodForPets(["6", "1000", "100", "30", "110", "25", "120", "35", "100", "30", "110", "25", "120", "35"])
