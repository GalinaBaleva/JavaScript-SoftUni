function charetyCampaign(input){
               let dorationCampaign = Number(input[0]);
               let bakers = Number(input[1]);
               let numOfCakes = Number(input[2]);
               let numOfWaffels = Number(input[3]);
               let numOfPancakes = Number(input[4]);
  //Total summ of food per day
               let sumOfCakes = numOfCakes * 45;
               let sumOfWaffels = numOfWaffels * 5.80;
               let sumOfPancakes = numOfPancakes * 3.20;

               let totalSumOfFood = (sumOfCakes + sumOfWaffels + sumOfPancakes) * bakers;
               let totalSumCompaign = totalSumOfFood * dorationCampaign;

               let total = totalSumCompaign - (totalSumCompaign / 8)


               console.log(total);
}
charetyCampaign(["23", "8", "14", "30", "16"])
charetyCampaign(["131", "5", "9", "33", "46"])