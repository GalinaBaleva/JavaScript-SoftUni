function readText(input) {
               let index = 0;
               while (true) {
                              let command = input[index];
                              index++;
                              if (command === "Stop") {
                                             break;
                              }
                              console.log(command);
               }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"])