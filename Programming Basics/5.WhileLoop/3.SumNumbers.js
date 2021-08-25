function sumNumbers(input) {
               let index = 0;
               let finalSum = Number(input[index]);
               index++;
               let command = Number(input[index]);
               index++;

               while (true) {
                              if (command >= finalSum) {
                                             console.log(command);
                                             break;
                              }
                              command += Number(input[index]);
                              index++;
               }
}
sumNumbers(["100", "10", "20", "30", "40"])
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])