function harvest(input) {
 
               let vineyardSqM = Number(input[0]);              
               let grapesSqMKg = Number(input[1]);
               let neededLitersWine = Number(input[2]);    
               let numOfWorkers = Number(input[3]);
 
               let totalGrapesKg = vineyardSqM * grapesSqMKg;
               let totalLitersWine = totalGrapesKg * 0.4 / 2.5;
 
               let difference = Math.abs(totalLitersWine - neededLitersWine);
 
 
               if (totalLitersWine >= neededLitersWine) {
                              let differenceForWorkers = difference / numOfWorkers;
                              console.log(`Good harvest this year! Total wine: ${Math.floor(totalLitersWine).toFixed(0)} liters.`)
                              console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(differenceForWorkers).toFixed(0)} liters per person.`)
 
 
               } else {
                              console.log(`It will be a tough winter! More ${Math.floor(difference).toFixed(0)} liters wine needed.`)
               }
}
harvest(["650", "2", "175", "3"])
harvest(["1020", "1.5", "425", "4"])
