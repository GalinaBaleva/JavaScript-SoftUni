function schoolGrades(input) {
               let storage = new Map();
               for (let info of input) {
                              let tokens = info.split(' ');
                              let name = tokens.shift();
                              let grades = tokens.map(Number);

                              if (!storage.has(name)) {
                                             storage.set(name, []);
                              }

                              let existedGrades = storage.get(name);
                              for (let grade of grades) {
                                             existedGrades.push(grade);
                              }
               }
               let sorted = Array.from(storage);
               sorted.sort(comparingGrades);

               for(let [name, grades] of sorted){
                              console.log(`${name}: ${grades.join(', ')}`)
               }



               function comparingGrades([nameOfSrudentA, gradesA],[nameOfSrudentB, gradesB]){
                              let avrA = 0;
                              gradesA.forEach(x => avrA += x);
                              avrA /= gradesA.length;

                              let avrB = 0;
                              gradesB.forEach(x => avrB += x);
                              avrB /= gradesB.length;

                              return avrA - avrB;
               }


}
schoolGrades([
               'Lilly 4 6 6 5',
               'Tim 5 6',
               'Tammy 2 4 3',
               'Tim 6 6'
]);