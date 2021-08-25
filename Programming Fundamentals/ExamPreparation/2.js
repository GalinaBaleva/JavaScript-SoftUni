function books(arr) {
               let line = arr.shift().toString().split(' | ');
               let index = 0;
               let current = arr[index];

               while (current !== 'Stop!') {
                              current = arr[index].split(' ');
                              let command = current[0];
                              if (command === 'Join') {
                                             let indexOfcommand = line.indexOf(current[1]);
                                             if (indexOfcommand < 0) {
                                                            line.push(current[1]);
                                             }
                              } else if (command === 'Drop') {
                                             let indexOfcommand = line.indexOf(current[1]);
                                             if (indexOfcommand >= 0) {
                                                            line.splice(indexOfcommand, 1);
                                             }
                              } else if (command === 'Replace') {
                                             let indexOld = line.indexOf(current[1]);
                                             let indexNew = line.indexOf(current[2]);
                                             if (indexOld >= 0 && indexNew < 0) {
                                                            line.splice(indexOld, 1, current[2]);
                                             }
                              }
                              index++;
                              current = arr[index];
               }
               console.log(line.join(' '))
}
books(["Romance | Fiction | Horror | Mystery",
               "Drop Romance",
               "Join Fantasy",
               "Stop!"])
books(["Poetry | Romance",
               "Drop Children",
               "Replace Fantasy Crime",
               "Stop!"])
books(["Thriller | Young | Crime",
               "Join Political",
               "Replace Crime Young",
               "Stop!"])