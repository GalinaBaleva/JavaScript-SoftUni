function examPreparation(input) {
               let lowGradeInput = Number(input[0]);
               let index = 1;
               let nameOfExercise = input[index];
               index++;
               let grade = Number(input[index]);
               index++;

               let lowGrades = 0;
               let averegeScore = 0;
               let lastProblem = 0;
               let totalGrades = 0;


               while (nameOfExercise !== "Enough") {
                              let curentGrade = Number(grade);
                              if (curentGrade <= 4) {
                                             lowGrades++;
                                             if (lowGrades === lowGradeInput) {
                                                            console.log(`You need a break, ${lowGrades} poor grades.`);
                                                            break;
                                             }
                              }

                              totalGrades++;
                              averegeScore += curentGrade;
                              lastProblem = nameOfExercise;

                              nameOfExercise = input[index];
                              index++;
                              grade = Number(input[index]);
                              index++;

               }
               if (nameOfExercise === "Enough") {
                              console.log(`Average score: ${(averegeScore / totalGrades).toFixed(2)}`);
                              console.log(`Number of problems: ${totalGrades}`);
                              console.log(`Last problem: ${lastProblem}`);
               }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])