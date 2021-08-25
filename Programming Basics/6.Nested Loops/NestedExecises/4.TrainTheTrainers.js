function trainTheTrainers(input) {

               let index = 0;
               let juryNum = Number(input[index++]);

               let totalAssesment = 0;
               let gradeNum = 0;


               while (input[index] !== "Finish") {
                              let presentationName = input[index++];

                              let studentAveregeGrade = 0;

                              for (let i = 1; i <= juryNum; i++) {
                                             let currentGrade = Number(input[index]);
                                             studentAveregeGrade += currentGrade;
                                             totalAssesment += currentGrade;
                                             gradeNum++;
                                             index++;
                              }
                              console.log(`${presentationName} - ${(studentAveregeGrade / juryNum).toFixed(2)}.`)
               }
               console.log(`Student's final assessment is ${(totalAssesment / gradeNum).toFixed(2)}.`)
}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])

