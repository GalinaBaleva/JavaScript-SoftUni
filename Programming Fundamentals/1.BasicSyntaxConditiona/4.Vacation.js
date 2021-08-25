function vacation(number, typePeople, dayOfWeek) {
               let price = 0;
               let finalPrice = 0;
               if (typePeople === 'Students') {

                              if (dayOfWeek === 'Friday') {
                                             price = 8.45;
                              } else if (dayOfWeek === 'Saturday') {
                                             price = 9.80;
                              } else if (dayOfWeek === 'Sunday') {
                                             price = 10.46;
                              }
                              finalPrice = price * number;
                              if (number >= 30) {
                                             finalPrice = finalPrice  - (finalPrice  * 0.15);
                              }

               } else if (typePeople === 'Business') {
                              if (dayOfWeek === 'Friday') {
                                             price = 10.90;
                              } else if (dayOfWeek === 'Saturday') {
                                             price = 15.60;
                              } else if (dayOfWeek === 'Sunday') {
                                             price = 16;
                              }
                              finalPrice = price * number;
                              if (number >= 100) {
                                             let totalWithutFreePeople = number - 10;
                                             finalPrice = price * totalWithutFreePeople;
                              }
               } else if (typePeople === 'Regular') {
                              if (dayOfWeek === 'Friday') {
                                             price = 15;
                              } else if (dayOfWeek === 'Saturday') {
                                             price = 20;
                              } else if (dayOfWeek === 'Sunday') {
                                             price = 22.50;
                              }
                              finalPrice = price * number;
                              if(number >= 10 && number <= 20){
                                             finalPrice = finalPrice  - (finalPrice  * 0.05);
                              }

               }
               console.log(`Total price: ${finalPrice.toFixed(2)}`);
} 

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");