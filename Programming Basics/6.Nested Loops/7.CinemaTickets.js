function cinemaTickets(input) {
               let index = 0;
               let command = input[index];

               let student = 0;
               let standard = 0;
               let kids = 0;
               let totalTikets = 0;

               while (command !== "Finish") {
                              let film = command
                              index++;
                              let freePlace = Number(input[index++]);
                              let typecommand = input[index++];

                              totalTikets += 0;
                              let currentSumTikets = 0;

                              while (typecommand !== "End") {
                                             currentSumTikets++;
                                             totalTikets++;

                                             if (typecommand === "student") {
                                                            student++;
                                             } else if (typecommand === "standard") {
                                                            standard++;
                                             } else if (typecommand === "kid") {
                                                            kids++;
                                             }
                                             if (currentSumTikets >= freePlace) {
                                                            break;
                                             }
                                             typecommand = input[index];
                                             index++;
                              }
                              console.log(`${film} - ${(currentSumTikets * 100 / freePlace).toFixed(2)}% full.`);
                              command = input[index];
               }
               console.log(`Total tickets: ${totalTikets}`);
               console.log(`${(student * 100 / totalTikets).toFixed(2)}% student tickets.`);
               console.log(`${(standard * 100 / totalTikets).toFixed(2)}% standard tickets.`);
               console.log(`${(kids * 100 / totalTikets).toFixed(2)}% kids tickets.`);
} 
//cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]) 