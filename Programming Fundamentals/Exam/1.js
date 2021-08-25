function solve(line) {
               let string = line.shift();


               while (line != 'Done') {
                              let [command, ...tokens] = line.shift().split(' ');

                              if (command === 'Change') {
                                             let [char, replacement] = tokens;
                                             let pattern = new RegExp(char, 'g');

                                             string = string.replace(pattern, replacement);
                                             console.log(string);

                              } else if (command === 'Includes') {
                                             let otherString = tokens;
                                             if (string.includes(otherString)) {
                                                            console.log(`True`);
                                             } else {
                                                            console.log(`False`);
                                             }
                              } else if (command === 'End') {
                                             let otherString = tokens[0];
                                             let other = string.split(' ');
                                             let pop = '';

                                             for (let i = 0; i < other.length; i++) {
                                                            let current = other[i];
                                                            if (i === other.length - 1) {
                                                                           pop = current;
                                                            }
                                             }
                                             if (pop === otherString) {
                                                            console.log(`True`);
                                             } else {
                                                            console.log(`False`);
                                             }
                              } else if (command === 'Uppercase') {
                                             string = string.toLocaleUpperCase();
                                             console.log(string);
                              } else if (command === 'FindIndex') {
                                             let char = tokens[0];
                                             let index = string.indexOf(char);

                                             console.log(index);
                              } else if (command === 'Cut') {
                                             let [start, end] = tokens;
                                             start = Number(start);
                                             end = Number(end) + start;

                                             string = string.substring(start, end)
                                             console.log(string)
                              }


               }
}
solve((["//Th1s 1s my str1ng!//",
               "Change 1 i",
               "Includes string",
               "End my",
               "Uppercase",
               "FindIndex I",
               "Cut 5 5",
               "Done"]));
solve(["*S0ftUni is the B3St Plac3**",
               "Change 2 o",
               "Includes best",
               "End is",
               "Uppercase",
               "FindIndex P",
               "Cut 3 7",
               "Done"])
solve((["//Th1s 1s my str1ng!//",
               "Change 1 i",
               "Includes string",
               "End string!//",
               "Uppercase",
               "FindIndex I",
               "Cut 5 5",
               "Done"]));