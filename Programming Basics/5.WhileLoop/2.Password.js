function password(input) {
               let index = 0;
               let userName = input[index];
               index++;
               let password = input[index];
               index++;
               let command = input[index];

               while (true) {
                              let temporalpassword = input[index]
                              index++;

                              if (temporalpassword === password) {
                                             console.log(`Welcome ${userName}!`);
                                             break;
                              }
               }
}
password(["Nakov", "1234", "Pass", "1324", "1234"])
password(["Gosho", "secret", "secret"])

