function skiTrip(input) {
               let daysOfTrip = Number(input[0]);
               let typeOfRoom = input[1];
               let review = input[2];

               let nights = daysOfTrip - 1;
               let result = 0;

               if (daysOfTrip <= 10) {
                              switch (typeOfRoom) {

                                             case "room for one person":
                                                            result = nights * 18; break;

                                             case "apartment":
                                                            result = nights * 25;
                                                            result = result * 0.70; break;

                                             case "president apartment":
                                                            result = nights * 35;
                                                            result = result * 0.90; break;

                              }
               } else if (daysOfTrip > 10 && daysOfTrip <= 15) {
                              switch (typeOfRoom) {

                                             case "room for one person":
                                                            result = nights * 18; break;

                                             case "apartment":
                                                            result = nights * 25;
                                                            result = result * 0.65; break;

                                             case "president apartment":
                                                            result = nights * 35;
                                                            result = result * 0.85; break;
                              }
               } else if (daysOfTrip > 15) {
                              switch (typeOfRoom) {

                                             case "room for one person":
                                                            result = nights * 18; break;

                                             case "apartment":
                                                            result = nights * 25;
                                                            result = result * 0.50; break;

                                             case "president apartment":
                                                            result = nights * 35;
                                                            result = result * 0.80; break;
                              }

               }
               if (review === "positive") {
                              console.log((result * 1.25).toFixed(2));
               } else if (review === "negative") {
                              console.log((result * 0.90).toFixed(2));
               }
}

skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])