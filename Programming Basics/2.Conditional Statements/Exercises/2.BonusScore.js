function bonusScore (input){
let integer = Number(input[0]); //integer - цяло цичло
let bonus = 0.0;

if (integer <= 100) {
               bonus = 5; //Ако числото е до 100 включително, бонус точките са 5.
} else if (integer < 1000) {
               bonus = integer * 0.2; //Ако числото е по-голямо от 100, бонус точките са 20% от числото.
} else if (integer > 1000) {
               bonus = integer * 0.1; //Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
}
//За четно число  + 1 т.
if (integer % 2 === 0){
               bonus +=1
} else if (integer % 10 == 5) {
               bonus +=2
}
//За число, което завършва на 5  + 2 т.
console.log(bonus)
console.log(integer + bonus)
}
bonusScore(["20"])
bonusScore(["175"])
bonusScore(["2703"])
bonusScore(["15875"])