function sumSeconds(input) {
               let firstRacerSec = Number(input[0]);
               let secondRacerSec = Number(input[1]);
               let thirdRacerSec = Number(input[2]);

               let totalSumSeconds = firstRacerSec + secondRacerSec + thirdRacerSec;
               let minutes = Math.floor(totalSumSeconds / 60);

               let seconds = totalSumSeconds % 60;

               if (seconds < 10) {
                              console.log(`${minutes}:0${seconds}`)
               } else {
                              console.log(`${minutes}:${seconds}`)
               }
}
sumSeconds(["35","45","44"])
sumSeconds(["22", "7", "34"])
sumSeconds(["50", "50", "49"])
sumSeconds(["14", "12", "10"])

