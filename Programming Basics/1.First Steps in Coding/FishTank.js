function fishTank(input) {
               let lengthInCm = Number(input[0]);
               let widthInCm = Number(input[1]);
               let heigthInCm = Number(input[2]);
               let percent = Number(input[3]);

               let volumeOfAquariumInCm = lengthInCm * widthInCm * heigthInCm;
               let volumeOfAquariumInLiters = volumeOfAquariumInCm * 0.001;
               let percentSand = percent * 0.01;

               let totalSumLiters = volumeOfAquariumInLiters * (1 - percentSand);

               console.log(totalSumLiters);
}
fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])