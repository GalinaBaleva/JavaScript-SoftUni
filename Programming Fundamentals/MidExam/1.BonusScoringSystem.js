function bonusScoringSystem(array) {
               array = array.map(Number);
               
               let countOfStudents = array.shift();
               let coumtOfLectures = array.shift();
               let initialBonus = array.shift();

               let maxBonus = 0;
               let maxAtended = 0;
               
               

               for (let i = 0; i < countOfStudents; i++) {
                              let currentStudent = array[i];
                              if(currentStudent <= coumtOfLectures){
                                             if(currentStudent > maxAtended){
                                                            maxAtended = currentStudent;
                                                            maxBonus = currentStudent / coumtOfLectures * (5 + (initialBonus));
                                             }
                                             
                                             
                              }
                              
                              
               }
               console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
               console.log(`The student has attended ${maxAtended} lectures.`)
}
bonusScoringSystem([
               '5', '25', '30',
               '12', '19', '24',
               '16', '20'
])
bonusScoringSystem([
               '10', '30', '14', '8',
               '23', '27', '28', '15',
               '17', '25', '26', '5',
               '18'
])