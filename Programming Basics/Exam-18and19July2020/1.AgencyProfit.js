function agencyPtofit(input) {
               let nameOfCompany = input[0];
               let countAdultsTikcets = Number(input[1]);
               let countChildrenTickets = Number(input[2]);
               let priceForAdult = Number(input[3]);
               let serviceFee = Number(input[4]);

               let priceForChild = priceForAdult * 0.3;
               let adultWithFee = priceForAdult + serviceFee;
               let childWithFee = priceForChild + serviceFee;

               let totalFomTickets = (countAdultsTikcets * adultWithFee) + (countChildrenTickets * childWithFee);
               let totalForAgency = totalFomTickets * 0.20;

               console.log(`The profit of your agency from ${nameOfCompany} tickets is ${totalForAgency.toFixed(2)} lv.`)

}
agencyPtofit(["WizzAir", "15", "5", "120", "40"])
agencyPtofit(["Ryanair", "60", "23", "158.96", "39.12"])