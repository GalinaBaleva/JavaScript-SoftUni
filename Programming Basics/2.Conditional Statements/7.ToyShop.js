function toyShop(input) {
  let puzzle = 2.6;
  let talkingDoll = 3;
  let tedyBear = 4.10;
  let minions = 8.20;
  let truck = 2;

  let excursionPrice = Number(input[0]);
  let countOfPuzzles = Number(input[1]);
  let countOfTalkingDolls = Number(input[2]);
  let countOfTedyBears = Number(input[3]);
  let countOfMinions = Number(input[4]);
  let countOfTrucks = Number(input[5]);

  let moneyFromToys = (puzzle * countOfPuzzles) + (talkingDoll * countOfTalkingDolls) + (tedyBear * countOfTedyBears) + (minions * countOfMinions) + (truck * countOfTrucks);
  let totalToys = countOfPuzzles + countOfTalkingDolls + countOfTedyBears + countOfMinions + countOfTrucks;

  if (totalToys >= 50) {
    moneyFromToys = moneyFromToys * 0.75;
    }
let moneyWithotRent = moneyFromToys * 0.90;

if (moneyWithotRent >= excursionPrice){
  console.log(`Yes! ${(moneyWithotRent - excursionPrice).toFixed(2)} lv left.`);
} else {
      console.log(`Not enough money! ${Math.abs(moneyWithotRent - excursionPrice).toFixed(2)} lv needed.`) //Math.abc превръша негативно сичло в позитивно.
    }
  }
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

