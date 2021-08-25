function factory(input) {
               let biscuitsPerDay = Number(input[0]);
               let biscuits3Day = biscuitsPerDay- (biscuitsPerDay * 0.25);
               let workers = Number(input[1]);
               let factori = Number(input[2]);

               // let smal = (biscuitsPerDay- (biscuitsPerDay * 0.25)) * 10 * workers;
               // let big = biscuitsPerDay * workers * 20;

               // let sumBiscuits = smal + big;

               let sumBiscuits = 0;

   
               for (let i = 1; i <= 30; i++) {
                              if (i % 3 === 0){
                                             let sumPerDay = biscuits3Day * workers;
                                             sumBiscuits += Math.floor(sumPerDay)
                              } else {
                                             let sumPerDay = biscuitsPerDay * workers;
                                             sumBiscuits += sumPerDay;      
                              }
               }

               
               let diference = sumBiscuits - factori;
               let total = diference / factori * 100;
               console.log(`You have produced ${sumBiscuits} biscuits for the past month.`);
               if(total > 0){
                              console.log(`You produce ${total.toFixed(2)} percent more biscuits.`);
               } else {
                              console.log(`You produce ${Math.abs(total).toFixed(2)} percent less biscuits.`);
               }
}
factory(["78", "8", "16000"])
factory(["65", "12", "26000"])
factory(["163", "16", "67020"])