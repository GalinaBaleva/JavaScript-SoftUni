function time15 (input) {
let hours = Number(input[0]);
let minutes = Number(input[1])  + 15;

if (minutes >= 60){
               hours += 1
               if (hours > 23) {
                              hours = 0;
               }
               minutes = minutes - 60;
}
if (minutes < 10) {
               console.log(`${hours}:0${minutes}`);
} else {
               console.log(`${hours}:${minutes}`);
}
}
time15(["1", "46"])
time15(["0", "01"])
time15(["23", "59"])
time15(["11", "08"])
time15(["12", "49"])