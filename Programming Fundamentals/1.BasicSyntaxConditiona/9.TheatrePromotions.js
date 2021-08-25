function theatrePromotions(day, age) {

               let numAge = Number(age);
               if (0 <= numAge && numAge <= 18) {
                              switch (day) {
                                             case 'Weekday': console.log(`${12}$`); break;
                                             case 'Weekend': console.log(`${15}$`); break;
                                             case 'Holiday': console.log(`${5}$`); break;
                                             default: console.log(`Error!`); break;
                              }
               } else if (18 < numAge && numAge <= 64) {
                              switch (day) {
                                             case 'Weekday': console.log(`${18}$`); break;
                                             case 'Weekend': console.log(`${20}$`); break;
                                             case 'Holiday': console.log(`${12}$`); break;
                                             default: console.log(`Error!`); break;
                              }
               } else if (64 < numAge && numAge <= 122) {
                              switch (day) {
                                             case 'Weekday': console.log(`${12}$`); break;
                                             case 'Weekend': console.log(`${15}$`); break;
                                             case 'Holiday': console.log(`${10}$`); break;
                                             default: console.log(`Error!`); break;
                              }
               } else if (numAge <= 0 || numAge > 122) {
                              console.log(`Error!`)
               }
}
theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)