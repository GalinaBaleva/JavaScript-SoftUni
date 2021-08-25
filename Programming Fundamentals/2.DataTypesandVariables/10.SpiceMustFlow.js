function spiceMustFlow(startingYield) {
               let workingDays = 0;
               let totalAmount = 0;
               for (let i = startingYield; i >= 100; i -= 10) {
                              workingDays++;
                              totalAmount += Number(i);
                              if (totalAmount <= 26) {
                                             break;
                              } else {
                                             totalAmount -= 26;
                              }


               }
               if (totalAmount <= 26) {
                              console.log(workingDays);
                              console.log(totalAmount)
               } else {
                              totalAmount -= 26;
                              console.log(workingDays);
                              console.log(totalAmount)
               }

}
spiceMustFlow(111);