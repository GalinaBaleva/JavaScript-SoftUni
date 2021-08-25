function traveling(input) {
               let index = 0;
               let command = input[index++];

               while (command !== "End") {
                              let country = command;
                              let budget = Number(input[index++]);
                              command = input[index]
                              
                              let sum = 0;
                              while (budget > sum) {
                                             sum += Number(command);
                                             index++;
                                             command = input[index];
                              }
                              console.log(`Going to ${country}!`);
                              command = input[index++];
               }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])