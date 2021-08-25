function smallShop(input) {
               let product = input[0];
               let town = input[1];
               let count = Number(input[2]);


               if (town === "Sofia") {
                              switch (product) {
                                             case "coffee": console.log(count * 0.50); break;
                                             case "water": console.log(count * 0.80); break;
                                             case "beer": console.log(count * 1.20); break;
                                             case "sweets": console.log(count * 1.45); break;
                                             case "peanuts": console.log(count * 1.60); break;

                              }
               } else if (town === "Plovdiv") {

                              switch (product) {
                                             case "coffee": console.log(count * 0.40); break;
                                             case "water": console.log(count * 0.70); break;
                                             case "beer": console.log(count * 1.15); break;
                                             case "sweets": console.log(count * 1.30); break;
                                             case "peanuts": console.log(count * 1.50); break;

                              }

               } else if (town === "Varna") {

                              switch (product) {
                                             case "coffee": console.log(count * 0.45); break;
                                             case "water": console.log(count * 0.70); break;
                                             case "beer": console.log(count * 1.10); break;
                                             case "sweets": console.log(count * 1.35); break;
                                             case "peanuts": console.log(count * 1.55); break;

                              }

               }
}
               smallShop(["coffee", "Varna", "2"])
               smallShop(["peanuts", "Plovdiv", "1"])
               smallShop(["beer", "Sofia", "6"])
               smallShop(["water", "Plovdiv", "3"])
               smallShop(["sweets", "Sofia", "2.23"])