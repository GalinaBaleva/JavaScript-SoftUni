function roomPainting(input){
let numCup = Number(input[0])
let numRols = Number(input[1])
let price1Gloves = Number(input[2])
let price1Brudh = Number(input[3])

let totalForPaint = numCup * 21.50
let totalForRols = numRols * 5.20
let numGloves = Math.ceil(numRols * 0.35);
let numBrush = Math.floor(numCup * 0.48)

let totalForGloves = price1Gloves * numGloves;
let totalForBrush = price1Brudh * numBrush;

let inTotal = totalForGloves + totalForBrush + totalForPaint + totalForRols;
let delivery = inTotal / 15


console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)
}
roomPainting(["10", "8", "2.2", 5])
