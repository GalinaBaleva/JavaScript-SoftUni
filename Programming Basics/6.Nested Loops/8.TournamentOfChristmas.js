function tournamentOfChristmas(input) {
               let index = 0;
               let days = Number(input[index++]);

               let totalSumPlays = 0;
               let totalWinPlays = 0;
               let totalLoosPlays = 0;

               for (let i = 1; i <= days; i++) {
                              let playName = input[index++];
                              let finalResult = input[index];

                              let sumFromWinPlays = 0;
                              let winPlays = 0;
                              let loosPlays = 0;

                              while (playName !== "Finish") {
                                             let currentFinalResult = finalResult
                                             if (currentFinalResult === "win") {
                                                            sumFromWinPlays += 20;
                                                            winPlays++;
                                                            totalWinPlays++;
                                             } else {
                                                            loosPlays++;
                                                            totalLoosPlays++;
                                             }

                                             playName = input[++index];
                                             finalResult = input[++index];

                              }
                              if (winPlays > loosPlays) {
                                             totalSumPlays += sumFromWinPlays * 1.1;
                              } else {
                                             totalSumPlays += sumFromWinPlays;
                              }
               }
               if (totalWinPlays > totalLoosPlays) {
                              totalSumPlays = totalSumPlays * 1.2;
                              console.log(`You won the tournament! Total raised money: ${totalSumPlays.toFixed(2)}`);
               } else {
                              console.log(`You lost the tournament! Total raised money: ${totalSumPlays.toFixed(2)}`);
               }
}
//tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])
tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"])