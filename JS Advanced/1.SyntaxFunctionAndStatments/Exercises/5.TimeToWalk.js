function timeToWalk(stepsToUni, lengthFootprintMeters, speedKmH) {
               const dist = stepsToUni * lengthFootprintMeters;
               let time = Math.round(dist / speedKmH * 3.6);
               time += Math.floor(dist / 500) * 60;

               const seconds = time % 60;
               time -= seconds;
               time /= 60; // обръщаме секундите в минути
               const miutes = time % 60;
               time -= miutes;
               time /= 60;  // обръщаме минутите в часове
               const hours = time % 60;

               console.log(`${pad(hours)}:${pad(miutes)}:${pad(seconds)}`);

               // function pad(number) {
               //                if (number < 10) {
               //                               number = '0' + number;
               //                               return number;
               //                } else {
               //                               return number;
               //                }
               // }

               function pad(number){
                              number = ('0' + number).slice(-2);
                              return number;
               }
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);