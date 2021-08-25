function trapetionArea(input){
let trapetionShortSide = Number(input[0]);
let trapetionLongSide = Number(input[1]);
let trapetionHigh = Number(input[2]);

let trapetionArea = (trapetionShortSide + trapetionLongSide) * trapetionHigh / 2;

console.log(trapetionArea.toFixed(2));
}
trapetionArea(["8", "13", "7"])