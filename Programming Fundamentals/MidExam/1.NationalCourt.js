function nationalCourt(input) {
               let first = Number(input.shift());
               let second = Number(input.shift());
               let thert = Number(input.shift());

               let totalPeople = Number(input[0]);

               let totalPeopleHour = first + second + thert;

               let neededHours = 0;
               let index = 0;

               while (totalPeople > 0) {
                            if(index % 3 === 0 && index !== 0){
                                             totalPeople -= totalPeopleHour;
                                             neededHours += 2;
                              } else {
                                             totalPeople -= totalPeopleHour;
                                             neededHours += 1;      
                              }
                              index++
               }
               console.log(`Time needed: ${neededHours}h.`)
}
nationalCourt([5, 6, 4, 20]);
nationalCourt([1, 2, 3, 45]);
nationalCourt([3, 2, 5, 40]);

// 01. SoftUni Reception
