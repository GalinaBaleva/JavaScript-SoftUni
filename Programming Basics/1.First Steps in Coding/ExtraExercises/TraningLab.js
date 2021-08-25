function traningLab(input){
let wightLabInCm = Number(input[0]) * 100;
let highLabInCm = Number(input[1]) * 100;

let highWithowtCoridor = highLabInCm - 100;

let tabelsOnOneRowd = highWithowtCoridor / 70;
let numberOfRowds = wightLabInCm / 120;

let totalSumOfTables = Math.trunc(numberOfRowds) * Math.trunc(tabelsOnOneRowd) - 3; // Math.trunc закръгля до близката 0 надолу

console.log(totalSumOfTables);
}
traningLab(["15", "8.9"])
traningLab(["8.4", "5.2"])