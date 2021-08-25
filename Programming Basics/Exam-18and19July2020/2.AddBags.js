function addBags(input) {

               let priceFor20Kg = Number(input[0]);
               let mimisBags = Number(input[1]);
               let daysBeforTravel = Number(input[2]);
               let countOfBags = Number(input[3]);

               let priceForBags = 0;

               if (mimisBags < 10) {
                              priceForBags = priceFor20Kg * 0.2;
               } else if (mimisBags >= 10 && mimisBags <= 20) {
                              priceForBags = priceFor20Kg * 0.5;
               } else if (mimisBags > 20) {
                              priceForBags = priceFor20Kg;
               }
               if (daysBeforTravel > 30){
                              priceForBags = priceForBags * 1.10;
               } else if (daysBeforTravel >= 7 && daysBeforTravel <= 30){
                              priceForBags = priceForBags * 1.15;
               } else if (daysBeforTravel < 7){
                              priceForBags = priceForBags * 1.40;
               }
               let totalPrice = priceForBags * countOfBags;

               console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)
}
//addBags(["30", "18", "15", "2"])
addBags(["25.50", "5", "36", "6"])
//addBags(["63.80", "23", "3", "1"])