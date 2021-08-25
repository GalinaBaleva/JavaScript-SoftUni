function gameOfIntervals(input) { //не е завършена!

let countOfPeople = Number(input.shift());

let from0To9 = 0;
let from10To19 = 0;
let from20To29 = 0;
let from30To39 = 0;
let from40To50 = 0;
let invalidNumbers = 0;

let totalPoints = 0;


for (let human = 0; human <= countOfPeople; human++){
               let humanInput = Number(input.shift());
               
               if (humanInput >= 0 && humanInput <= 9){
                              totalPoints += humanInput * 0.80;
               } else if(humanInput >= 10 && humanInput <= 19){
                              totalPoints += humanInput * 0.70;
               } else if(humanInput >= 20 && humanInput <= 29){
                              totalPoints += humanInput * 0.60;
               }else if(humanInput >= 30 && humanInput <= 39){
                              totalPoints += 50;
               }else if(humanInput >= 40 && humanInput <= 50){
                              totalPoints += 100;
               } else if(humanInput < 50 && humanInput < 0){
                              totalPoints /= 2;
               }
}
console.log(totalPoints)
}
//gameOfIntervals (["1", "8"])
gameOfIntervals (["10", "43", "57", -"12", "23", "12", "0", "50", "40", "30", "20"])