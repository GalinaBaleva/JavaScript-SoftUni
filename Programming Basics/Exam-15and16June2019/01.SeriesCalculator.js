function seriesCalculator(input) {
               let name = input[0];
               let numSesons = Number(input[1]);
               let episodes = Number(input[2]);
               let timeNormEpisods = Number(input[3]);

               let ad = timeNormEpisods * 0.2;
               let episodWhithAd = ad + timeNormEpisods;
               let specialEpisod = numSesons * 10;

               let inTotal = episodWhithAd * episodes * numSesons + specialEpisod;

               console.log(`Total time needed to watch the ${name} series is ${inTotal} minutes.`)

}
seriesCalculator(["Lucifer", "3", "18", "55"])