function journey(input) {
               let budget = Number(input[0]);
               let season = input[1];

               let spendedMony = 0;

               if (budget <= 100) {
                              if (season === "summer") {
                                             spendedMony = budget * 0.3;
                                             console.log(`Somewhere in Bulgaria`)
                                             console.log(`Camp - ${spendedMony.toFixed(2)}`);
                              } else if (season === "winter") {
                                             spendedMony = budget * 0.7;
                                             console.log(`Somewhere in Bulgaria`)
                                             console.log(`Hotel - ${spendedMony.toFixed(2)}`);
                              }
               } else if (budget <= 1000) {
                              if (season === "summer") {
                                             spendedMony = budget * 0.4;
                                             console.log(`Somewhere in Balkans`)
                                             console.log(`Camp - ${spendedMony.toFixed(2)}`);
                              } else if (season === "winter") {
                                             spendedMony = budget * 0.8;
                                             console.log(`Somewhere in Balkans`)
                                             console.log(`Hotel - ${spendedMony.toFixed(2)}`);
                              }
               } else if (budget > 1000) {
                              spendedMony = budget * 0.9;
                              console.log(`Somewhere in Europe`)
                              console.log(`Hotel - ${spendedMony.toFixed(2)}`);
               }
}
//journey(["50", "summer"])
//journey(["75", "winter"])
//journey(["312", "summer"])
journey(["678.53", "winter"])
//journey(["1500", "summer"])