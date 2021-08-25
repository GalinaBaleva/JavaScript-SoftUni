function trianglearea(input){
let triangleSide = Number(input[0]);
let triangleHigh = Number(input[1]);

let trianglearea = triangleSide * triangleHigh / 2;

console.log(trianglearea.toFixed(2));
}
trianglearea(["20", "30"])
trianglearea(["15", "35"])
trianglearea(["7.75", "8.45"])
trianglearea(["1.23456", "4.56789"])
