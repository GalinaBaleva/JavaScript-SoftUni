function graduation(input) {
               let nameOfStudent = input[0];
               let index = 1;
               let gradeFromInput = Number(input[index]);

               let grade = 1;
               let sumOfGrades = 0;
               let lowGrades = 0;

               while (grade <= 12) {
                              let courentGrade = Number(gradeFromInput);
                              if (courentGrade < 4) {
                                             lowGrades++;
                                             if (lowGrades === 2) {
                                                            console.log(`${nameOfStudent} has been excluded at ${grade - 1} grade`);
                                                            break;
                                             }
                              }
                              sumOfGrades += courentGrade;
                              grade++;

                              index++;
                              gradeFromInput = Number(input[index]);

               }
               if (grade > 12) {
                              let averegeGrade = sumOfGrades / (grade - 1);
                              console.log(`${nameOfStudent} graduated. Average grade: ${averegeGrade.toFixed(2)}`);
               }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])