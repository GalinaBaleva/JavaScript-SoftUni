function depositCalculator(input){
let depositSum = Number(input[0]);
let dorationCreditMonth = Number(input[1]);
let annualPercentage = Number(iput[2] / 100);

let annualDividend = depositSum * annualPercentage;
let monthDividend = annualDividend / 12;
let totalSum = depositSum + (dorationCreditMonth * monthDividend);


console.log(totalSum);
}
 depositCalculator(["200" , "3", "5.7"])