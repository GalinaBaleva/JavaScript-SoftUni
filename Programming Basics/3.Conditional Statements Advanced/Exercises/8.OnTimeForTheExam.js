function onTime(input) {
               let hourOfExam = Number(input[0]);
               let minutesOfExam = Number(input[1]);
               let hourOfArrival = Number(input[2]);
               let minutesOfArrival = Number(input[3]);

               let totalMinExam = hourOfExam * 60 + minutesOfExam;
               let totalMinArrival = hourOfArrival * 60 + minutesOfArrival;

               let differens = Math.abs(totalMinExam - totalMinArrival);
               let hourDifferens = Math.trunc(differens / 60);
               let minDifferens = differens % 60;


               if (totalMinArrival === totalMinExam) {
                              console.log(`On time`);

               } else if (totalMinArrival <= totalMinExam && differens <= 30) {
                              console.log(`On time`);
                              console.log(`${minDifferens} minutes before the start`);
               }
               else if (totalMinArrival > totalMinExam && differens < 60) {
                              console.log(`Late`);
                              console.log(`${minDifferens} minutes after the start`);

               } else if (totalMinArrival > totalMinExam && differens >= 60) {
                              if (minDifferens < 10) {
                                             console.log(`Late`);
                                             console.log(`${hourDifferens}:0${minDifferens}} hours after the start`);
                              } else {
                                             console.log(`Late`);
                                             console.log(`${hourDifferens}:${minDifferens} hours after the start`);
                              }
               } else if (totalMinArrival < totalMinExam && (differens > 30 && differens < 60)) {
                              console.log(`Early`);
                              console.log(`${minDifferens} minutes before the start`);
               } else if (totalMinArrival < totalMinExam && (differens >= 60)) {
                              if (minDifferens < 10) {
                                             console.log(`Early`);
                                             console.log(`${hourDifferens}:0${minDifferens} hours before the start`);
                              } else {
                                             console.log(`Early`);
                                             console.log(`${hourDifferens}:${minDifferens} hours before the start`);
                              }
               }
}
onTime(["9", "30", "9", "50"])
onTime(["9", "00", "10", "30"])
onTime(["10", "00", "10", "00"])
onTime(["9", "00", "8", "30"])
onTime(["14", "00", "13", "55"])
onTime(["11", "30", "10", "55"])
onTime(["16", "00", "15", "00"])
onTime(["11", "30", "8", "12"])
onTime(["11", "30", "12", "29"])