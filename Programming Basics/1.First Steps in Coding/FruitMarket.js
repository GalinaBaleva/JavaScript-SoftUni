function fruitMarket(input) {
               let priceOfStrawberry = Number(input[0]);
               let bananasKG = Number(input[1]);
               let orangesKg = Number(input[2]);
               let raspberrysKg = Number(input[3]);
               let strawberrysKg = Number(input[4]);

               let priceOfRaspberry = priceOfStrawberry / 2;
               let priceOfOranges = priceOfRaspberry - (priceOfRaspberry * 0.4);
               let priceOfBananas = priceOfRaspberry - (priceOfRaspberry * 0.8);

               let raspberrysSum = raspberrysKg * priceOfRaspberry;
               let orangesSum = orangesKg * priceOfOranges;
               let bananasSum = bananasKG * priceOfBananas;
               let strawberrySum = strawberrysKg * priceOfStrawberry;

               let totalSum = raspberrysSum + orangesSum + bananasSum + strawberrySum;
               console.log(totalSum);

}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"])
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"])