function volleyBall(input) {
               let typeOfEar = input[0];
               let holidaysInYear = Number(input[1]);
               let weekendsInVillige = Number(input[2]);

               let weekendsInSofia = 48 - weekendsInVillige;
               let saturdaysPlays = weekendsInSofia * (3.0 / 4);
               let holidaysPlays = holidaysInYear * (2.0 / 3);
               let totalPlays = holidaysPlays + saturdaysPlays + weekendsInVillige;

               if (typeOfEar === "leap") {
                              console.log(Math.trunc(totalPlays * 1.15));
               } else {
                              console.log(Math.trunc(totalPlays));
               }
}
volleyBall(["leap", "5", "2"])
volleyBall(["normal", "3", "2"])
volleyBall(["leap", "2", "3"])
volleyBall(["normal", "11", "6"])
volleyBall(["leap", "0", "1"])
volleyBall(["normal", "6", "13"])