function christmasPreparation(input) {
               let rollsPaper = Number(input[0]);
               let rollsOfCloth = Number(input[1]);
               let glue = Number(input[2]);
               let discount = Number(input[3] / 100);

               let totalPaper = rollsPaper * 5.8;
               let totalRollsOfCloth = rollsOfCloth * 7.20;
               let totalGlue = glue * 1.2;

               let totalPrice = totalPaper + totalRollsOfCloth + totalGlue;
               let totalWithDiscount = totalPrice - (totalPrice * discount);

               console.log(totalWithDiscount.toFixed(3));

}
christmasPreparation(["2", "3", "2.5", "25"])
christmasPreparation(["4", "2", "5", "13"])
christmasPreparation(["7",
               "8",
               "0.5",
               "45"])