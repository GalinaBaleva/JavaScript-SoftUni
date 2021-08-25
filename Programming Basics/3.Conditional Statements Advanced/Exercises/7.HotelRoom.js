function hotelRoom(input) {

               let month = input[0]
               let nights = Number(input[1]);

               //, , July, ,  или 
               if (month === "May" || month === "October") {
                              if (nights > 7 && nights <= 14) {
                                             console.log(`Apartment: ${(nights * 65).toFixed(2)} lv.`);
                                             console.log(`Studio: ${((nights * 50) * 0.95).toFixed(2)} lv.`);
                              } else if (nights > 14) {
                                             console.log(`Apartment: ${((nights * 65)* 0.90).toFixed(2)} lv.`);
                                             console.log(`Studio: ${((nights * 50) * 0.70).toFixed(2)} lv.`);
                              } else {
                                             console.log(`Apartment: ${(nights * 65).toFixed(2)} lv.`);
                                             console.log(`Studio: ${(nights * 50).toFixed(2)} lv.`);
                              }
               } else if (month === "June" || month === "September") {
                              if (nights > 14) {
                                             console.log(`Apartment: ${((nights * 68.70) * 0.90).toFixed(2)} lv.`);
                                             console.log(`Studio: ${((nights * 75.20) * 0.80).toFixed(2)} lv.`);
                              } else {
                                             console.log(`Apartment: ${(nights * 68.70).toFixed(2)} lv.`);
                                             console.log(`Studio: ${(nights * 75.20).toFixed(2)} lv.`);
                              }

               } else if (month === "July" || month === "August") {
                              if (nights > 14) {
                                             console.log(`Apartment: ${((nights * 77) * 0.90).toFixed(2)} lv.`);
                                             console.log(`Studio: ${(nights * 76).toFixed(2)} lv.`);
                              } else {
                                             console.log(`Apartment: ${(nights * 77).toFixed(2)} lv.`);
                                             console.log(`Studio: ${(nights * 76).toFixed(2)} lv.`);
                              }
               }
}
hotelRoom(["May", "15"])
hotelRoom(["June", "14"])
hotelRoom(["August", "20"])