function grades(input) {
               let countOfSudents = Number(input[0]);

               let topStudents = 0;
               let studentsTill4 = 0;
               let studentsTill3 = 0;
               let failStudents = 0;

               let averegeSuccess = 0;


               for (let student = 1; student <= countOfSudents; student++) {
                              let grad = Number(input[student]);
                              averegeSuccess += grad / countOfSudents;

                              if (grad >= 5) {
                                             topStudents++;
                              } else if (grad >= 4 && grad <= 4.99) {
                                             studentsTill4++;
                              } else if (grad >= 3 && grad <= 3.99) {
                                             studentsTill3++;
                              } else {
                                             failStudents++;
                              }
               }

               let topStudentsPercents = topStudents / countOfSudents * 100;
               let studentsTill4Percents = studentsTill4 / countOfSudents * 100;
               let studentsTill3Percents = studentsTill3 / countOfSudents * 100;
               let failStudentsPercents = failStudents / countOfSudents * 100;

               console.log(`Top students: ${topStudentsPercents.toFixed(2)}%`)
               console.log(`Between 4.00 and 4.99: ${studentsTill4Percents.toFixed(2)}%`)
               console.log(`Between 3.00 and 3.99: ${studentsTill3Percents.toFixed(2)}%`)
               console.log(`Fail: ${failStudentsPercents.toFixed(2)}%`)
               console.log(`Average: ${averegeSuccess.toFixed(2)}`)

}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])
grades(["6", "2", "3", "4", "5", "6", "2.2"])