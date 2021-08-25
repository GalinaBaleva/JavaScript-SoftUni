function chengeBureau(input) {
               let bitcoints = Number(input[0]);
               let chinesischerJohn = Number(input[1]);
               let commission = Number((input[2]) / 100);

               let bitcointToLeva = bitcoints * 1168;
               let chinesischerJohnToLeva = (chinesischerJohn * 0.15) * 1.76;
               let totalSumOfEuro = (bitcointToLeva + chinesischerJohnToLeva) / 1.95;

               let commissionPercent = totalSumOfEuro * commission;
               finalSum = totalSumOfEuro - commissionPercent;
               
               console.log(finalSum.toFixed(2));

}
chengeBureau(["1", "5", "5"])
chengeBureau(["20", "5678", "2.4"])
chengeBureau(["7", "50200.12", "3"])