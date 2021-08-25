function fishLand(input) {
               let mackerelPriceKg = Number(input[0]);
               let spartPriceKg = Number(input[1]);
               let bonitoKg = Number(input[2]);
               let horsemackerelKg = Number(input[3]);
               let musselsKg = Number(input[4]);

               let bonitoPrice = mackerelPriceKg + mackerelPriceKg * 0.60;
               let bonitoTotalPrice = bonitoPrice * bonitoKg;

               let horsemackerelPrice = spartPriceKg + spartPriceKg * 0.80;
               let horsemackerelTotalPrice = horsemackerelPrice * horsemackerelKg;

               let musselsTotalPrice = musselsKg * 7.5;

               let totalSum = bonitoTotalPrice + horsemackerelTotalPrice + musselsTotalPrice;


               console.log(totalSum.toFixed(2));

}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"])
fishLand(["5.55", "3.57", "4.3", "3.6", "7"])