function suppliesForSchool(input) {
               let numPens = Number(input[0]);
               let numMarkers = Number(input[1]);
               let liquid = Number(input[2]);
               let discount = Number(input[3]/100);

               let priceForPens = numPens * 5.80;
               let priceForMarkers = numMarkers * 7.2;
               let priceLiquid = liquid * 1.2;

               let total = priceForPens + priceForMarkers + priceLiquid;
               let totalWhithDiscount = total - (total * discount);

               console.log(totalWhithDiscount.toFixed(3))
}
//suppliesForSchool(["2","3","2.5","25"])
suppliesForSchool(["4","2","5","13"])
suppliesForSchool(["7","8","0.5","45"])
