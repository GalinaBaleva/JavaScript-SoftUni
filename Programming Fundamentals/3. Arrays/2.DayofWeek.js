function dayOfWeek(num){
               let index = num - 1;
               let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
               if(num > 7){
                              console.log(`Invalid day!`);
               } else {
                              
                              console.log(dayOfWeek[index])
               }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);