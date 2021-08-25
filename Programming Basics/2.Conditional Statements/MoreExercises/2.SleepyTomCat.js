function tomsSleep(input) {

               let daysOut = Number(input[0]);

               let workingDays = 365 - daysOut;
               let timeForPlay = daysOut * 127 + workingDays * 63;
               let difference = 30000 - timeForPlay;

               let hours = Math.abs(Math.trunc(difference / 60));
               let min = Math.abs(difference % 60);
               if (timeForPlay <= 30000) {
                              console.log(`Tom sleeps well`);
                              console.log(`${hours} hours and ${min} minutes less for play`);
               } else {
                              console.log(`Tom will run away`);
                              console.log(`${hours} hours and ${min} minutes more for play`);

               }
}
tomsSleep(["20"])
tomsSleep(["113"])