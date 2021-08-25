function catWalking(input) {
               let minWalkingPerDay = Number(input[0]);
               let numOfWalkings = Number(input[1]);
               let eatedCalories = Number(input[2]);

               let totalMin = minWalkingPerDay * numOfWalkings;
               let totalCalories = totalMin * 5;
               let burnedCalories = eatedCalories * 0.5;

               if (totalCalories >= burnedCalories) {
                              console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
               } else {
                              console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
               }
}
catWalking(["30",
               "3",
               "600"])
catWalking(["15",
               "2",
               "500"])
catWalking(["40",
               "2",
               "300"])