function areaOfFigures(input) {

let figure = input[0];
let a = Number(input[1]);
let b = Number(input[2]);
let area = 0;

if (figure === "square"){
               area = a * a;
} else if (figure === "rectangle"){
               area = a * b;
} else if (figure === "circle"){
               area = Math.PI * a * a;
} else {
               area = a * b / 2;
}
console.log(area.toFixed(3));
}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle","6"])
areaOfFigures(["triangle","4.5","20"])
