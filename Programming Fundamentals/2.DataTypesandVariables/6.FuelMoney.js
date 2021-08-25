function fuelMoney(distanceNeeded, includedPassengers, pricePerLiter) {
               let dieselTotalDistance = (7 / 100) * distanceNeeded;
               let dieselForPassengers = ((100 / 100) * includedPassengers * distanceNeeded) / 1000;
               let inTotal = dieselTotalDistance + dieselForPassengers;

               let neededMoney = inTotal * pricePerLiter;

               console.log(`Needed money for that trip is ${neededMoney.toFixed(2)} lv`)


}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);