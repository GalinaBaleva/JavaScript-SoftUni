function balls(input) {
               let countOfBalls = Number(input.shift());
              
               let points = 0;
               let red = 0;
               let orange = 0;
               let yellow = 0;
               let white = 0;
               let black = 0;
               let other = 0;

               for (let index = 0; index < countOfBalls; index++) {
                              let colourOfBall = input[index];
                              if (colourOfBall === "red") {
                                             points += 5;
                                             red++;
                              } else if (colourOfBall === "orange") {
                                             points += 10;
                                             orange++;
                              } else if (colourOfBall === "yellow") {
                                             points += 15;
                                             yellow++;
                              } else if (colourOfBall === "white") {
                                             points += 20;
                                             white++;
                              } else if (colourOfBall === "black") {
                                             points /= 2;
                                             black++;
                              } else {
                                             other++;
                              }
               }
               console.log(`Total points: ${Math.trunc(points)}`);
               console.log(`Points from red balls: ${red}`);
               console.log(`Points from orange balls: ${orange}`);
               console.log(`Points from yellow balls: ${yellow}`);
               console.log(`Points from white balls: ${white}`);
               console.log(`Other colors picked: ${other}`);
               console.log(`Divides from black balls: ${black}`);
}
balls(["3", "white", "black", "pink"])
balls(["10", "white", "white", "ee", "red", "orange", "red", "black", "black", "black", "black"]) 