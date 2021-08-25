function hospital(input) {
               let period = Number(input.shift());


               let treatedPatiets = 0;
               let untreatedPariets = 0;
               let countOfDocktors = 7;

               for (let day = 1; day <= period; day++) {
                              let curentPatients = Number(input.shift());

                              if (day % 3 === 0 && untreatedPariets > treatedPatiets) {
                                             countOfDocktors++;
                              }
                              if (curentPatients > countOfDocktors) {
                                             treatedPatiets += countOfDocktors;
                                             untreatedPariets += curentPatients - countOfDocktors;
                              } else {
                                             treatedPatiets += curentPatients;
                              }

               }
               console.log(`Treated patients: ${treatedPatiets}.`);
               console.log(`Untreated patients: ${untreatedPariets}.`);
}

hospital(["4", "7", "27", "9", "1"])
hospital(["6", "25", "25", "25", "25", "25", "2"])
hospital(["3", "7", "7", "7"])