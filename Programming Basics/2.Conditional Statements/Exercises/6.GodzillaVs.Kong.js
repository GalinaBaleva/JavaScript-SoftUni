function movieGodzilla(input) {
               let movieBudget = Number(input[0]);
               let numOfStatists = Number(input[1]);  
               let priceClothesPerOne = Number(input[2]);

               let decorBudget = movieBudget * 0.10;
               let budgetForClothes = 0;


               if (numOfStatists >= 150) {
                              budgetForClothes = numOfStatists * (priceClothesPerOne - priceClothesPerOne * 0.10);
               } else {
                              budgetForClothes = numOfStatists * priceClothesPerOne;
               }

               let totalMoveNeeds = decorBudget + budgetForClothes;
               let leaveMoney = Math.abs(movieBudget - decorBudget - budgetForClothes).toFixed(2);

               if (totalMoveNeeds > movieBudget) { 
                              console.log(`Not enough money!`)
                              console.log(` Wingard needs ${leaveMoney} leva more.`)
               } else if (totalMoveNeeds <= movieBudget) {
                              console.log(`Action!`);
                              console.log(` Wingard starts filming with ${leaveMoney} leva left.`)
               }

}
movieGodzilla(["20000","120","55.5"])
movieGodzilla(["15437.62","186","57.99"])
movieGodzilla(["9587.88", "222", "55.68"])