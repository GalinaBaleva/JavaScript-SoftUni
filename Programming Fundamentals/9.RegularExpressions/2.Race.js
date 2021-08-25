function race(input) {
               let pattern1 = /[A-Za-z]/g;
               let pattern2 = /\d/g;

               let races = input.shift().split(', ');

               let racersObj = {};
               for (let race of races) {
                              racersObj[race] = 0;
               }
               while (input != 'end of race') {
                              let current = input.shift();
                              let name = current.match(pattern1);
                              name = name.join('');

                              if (racersObj.hasOwnProperty(name)) {
                                             let distance = current.match(pattern2).map(Number).reduce((x, y) => x + y, 0);
                                             racersObj[name] += distance;
                              }
               };
               let sorted = Object.entries(racersObj).sort((a, b) => b[1] - a[1]);

               if (sorted[0]) {
                              console.log(`1st place: ${sorted[0][0]}`);
               };
               if (sorted[1]) {
                              console.log(`2nd place: ${sorted[1][0]}`);
               };
               if (sorted[2]) {
                              console.log(`3rd place: ${sorted[2][0]}`);
               };
}
race(["George, Peter, Bill, Tom",
               "G4e@55or%6g6!68e!!@",
               "R1@!3a$y4456@",
               "B5@i@#123ll",
               "G@e54o$r6ge#",
               "7P%et^#e5346r",
               "T$o553m&6",
               "end of race"]);