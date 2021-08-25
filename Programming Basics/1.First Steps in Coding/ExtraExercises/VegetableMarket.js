function vegetalbeMarket(input){
let priceKgVegetagle = Number(input[0]);
let priceKgFruts = Number(input[1]);
let totalKgVegetable = Number(input[2]);
let totalKgFruts = Number(input[3]);

let totalVegetableLv = priceKgVegetagle * totalKgVegetable;
let totalFutsLv = priceKgFruts * totalKgFruts;

let totalSumEuro = (totalVegetableLv + totalFutsLv) / 1.94

console.log(totalSumEuro.toFixed(2));
}
vegetalbeMarket(["0.194", "19.4", "10", "10"])
vegetalbeMarket(["1.5", "2.5", "10", "10"])