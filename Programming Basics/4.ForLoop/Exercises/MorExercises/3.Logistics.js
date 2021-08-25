function logistics(input) {
               let countOfCargos = Number(input.shift());

               let minivansCargo = 0;
               let truckCargo = 0;
               let trainCargo = 0;

               let totalTons = 0;

               for (let curentCountOfCargos = 0; curentCountOfCargos < countOfCargos; curentCountOfCargos++) {
                              let curentCargo = Number(input.shift())
                              totalTons += curentCargo;

                              if (curentCargo <= 3) {
                                             minivansCargo += curentCargo;
                              } else if (curentCargo >= 4 && curentCargo <= 11) {
                                             truckCargo += curentCargo;
                              } else if (curentCargo >= 12) {
                                             trainCargo += curentCargo;
                              }

               }
               let pricePerTon = (minivansCargo * 200 + truckCargo * 175 + trainCargo * 120) / totalTons;
               let minivanPercents = minivansCargo / totalTons * 100;
               let truckPercents = truckCargo / totalTons * 100;
               let trainPercents = trainCargo / totalTons * 100;

               console.log(pricePerTon.toFixed(2));
               console.log(`${minivanPercents.toFixed(2)}%`);
               console.log(`${truckPercents.toFixed(2)}%`);
               console.log(`${trainPercents.toFixed(2)}%`);

}
logistics(["4", "1", "5", "16", "3"])
logistics(["5", "2", "10", "20", "1", "7"])
