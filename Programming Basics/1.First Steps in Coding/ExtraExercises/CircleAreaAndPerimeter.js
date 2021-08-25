function circleAreaAndPerimeter(input){
               let circleRadius = Number(input[0]);

let circleArea = Math.PI * circleRadius * circleRadius;
let circleParameter = Math.PI * 2 * circleRadius;

console.log(circleArea.toFixed(2));
console.log(circleParameter.toFixed(2));
}
circleAreaAndPerimeter([3])