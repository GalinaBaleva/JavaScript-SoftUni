function fruitShop(input) {
               let product = input[0];
               let day = input[1];
               let count = Number(input[2]);


               if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                              switch (product) {

                                             case "banana": console.log((count * 2.50).toFixed(2)); break;
                                             case "apple": console.log((count * 1.20).toFixed(2)); break;
                                             case "orange": console.log((count * 0.85).toFixed(2)); break;
                                             case "grapefruit": console.log((count * 1.45).toFixed(2)); break;
                                             case "kiwi": console.log((count * 2.70).toFixed(2)); break;
                                             case "pineapple": console.log((count * 5.50).toFixed(2)); break;
                                             case "grapes": console.log((count * 3.85).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               } else if (day === "Saturday" || day === "Sunday") {
                              switch (product) {
                                             case "banana": console.log((count * 2.70).toFixed(2)); break;
                                             case "apple": console.log((count * 1.25).toFixed(2)); break;
                                             case "orange": console.log((count * 0.90).toFixed(2)); break;
                                             case "grapefruit": console.log((count * 1.60).toFixed(2)); break;
                                             case "kiwi": console.log((count * 3.00).toFixed(2)); break;
                                             case "pineapple": console.log((count * 5.60).toFixed(2)); break;
                                             case "grapes": console.log((count * 4.20).toFixed(2)); break;
                                             default: console.log(`error`); break;
                              }
               } else {
                              console.log(`error`);
               }
}
fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])