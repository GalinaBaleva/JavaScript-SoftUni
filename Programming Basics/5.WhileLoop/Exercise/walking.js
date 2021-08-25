function walking(input) {
               let goalSteps = 10000;
               let steps = input[0];
               let index = 1;
               let goingHome = input[input.length - 2];
               let lastSteps = Number(input[input.length - 1]);

               let totalSteps = 0;

               while (steps !== "Going home") {
                              let currentSteps = Number(steps);
                              totalSteps += currentSteps;
                              if (totalSteps >= goalSteps) {
                                             console.log(`Goal reached! Good job!`);
                                             console.log(`${Math.abs(totalSteps - goalSteps)} steps over the goal!`);
                                             return;
                              }
                              steps = input[index];
                              index++;
               }
               if (goingHome === "Going home"){
                              console.log(`${Math.abs((totalSteps + lastSteps) - goalSteps)} more steps to reach goal.`);
               }
//                switch (goingHome) {

//                               case "Going home": console.log(`${Math.abs((totalSteps + lastSteps) - gollSteps)} more steps to reach goal.`);
//                                              break;
//                }
}
walking(["1000", "1500", "2000", "6500"])
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
walking(["1500", "300", "2500", "3000", "Going home", "200"])
walking(["125", "250", "4000", "30", "2678", "4682"])