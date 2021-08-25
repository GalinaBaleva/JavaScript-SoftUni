function yardGreening(input){
    let greenedQM = Number(input[0]);
    let totalPriceQM = greenedQM * 7.61;
    let discount = 0.18 * totalPriceQM;
    let finalPrice = totalPriceQM - discount;

console.log(`The final preice is: ${finalPrice} lv. The discount is: ${discount} lv.`);

}
yardGreening(["550"])