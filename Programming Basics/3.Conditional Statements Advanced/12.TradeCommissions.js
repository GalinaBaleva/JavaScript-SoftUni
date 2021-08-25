function commissions(input) {
               let town = input[0];
               let count = Number(input[1]);

               if (0 <= count && count <= 500) {
                              switch (town) {
                                             case "Sofia": console.log((count * 0.05).toFixed(2)); break;
                                             case "Varna": console.log((count * 0.045).toFixed(2)); break;
                                             case "Plovdiv": console.log((count * 0.055).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               } else if (500 < count && count <= 1000) {
                              switch (town) {
                                             case "Sofia": console.log((count * 0.070).toFixed(2)); break;
                                             case "Varna": console.log((count * 0.075).toFixed(2)); break;
                                             case "Plovdiv": console.log((count * 0.08).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               }else if (1000 < count && count <= 10000) {
                              switch (town) {
                                             case "Sofia": console.log((count * 0.080).toFixed(2)); break;
                                             case "Varna": console.log((count * 0.10).toFixed(2)); break;
                                             case "Plovdiv": console.log((count * 0.12).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               } else if (count > 10000) {
                              switch (town) {
                                             case "Sofia": console.log((count * 0.12).toFixed(2)); break;
                                             case "Varna": console.log((count * 0.13).toFixed(2)); break;
                                             case "Plovdiv": console.log((count * 0.145).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               } else {
                              console.log(`error`);
               }
}
commissions(["Sofia", "1500"])
commissions(["Plovdiv", "499.99"])
commissions(["Varna", "3874.50"])
commissions(["Kaspichan", "-50"])