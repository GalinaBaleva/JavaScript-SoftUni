function histogram(input) {

               let n = Number(input.shift()); // .shift измества първи инпут и го присвоява на n
               // let n = Number(input[0]); по-лесно решение на същата задача

               let p1 = 0;
               let p2 = 0;
               let p3 = 0;
               let p4 = 0;
               let p5 = 0;

               for (let i = 0; i <= n; i++) {
               // (let i = 1; не е 0, защото 0-вият индекс е присвоен на n (който е брой числа в индекса) и трябва да започнем
               // от втоия, от самите числа) 

                              let currentInput = Number(input.shift()); //Number(input[i]);

               if (currentInput < 200) {
                              p1++;
               } else if (currentInput >= 200 && currentInput <= 399) {
                              p2++;
               } else if (currentInput >= 400 && currentInput <= 599) {
                              p3++;
               } else if (currentInput >= 600 && currentInput <= 799) {
                              p4++;
               } else if (currentInput >= 800) {
                              p5++;
               }
}
console.log(`${(p1 / n * 100).toFixed(2)}%`);
console.log(`${(p2 / n * 100).toFixed(2)}%`);
console.log(`${(p3 / n * 100).toFixed(2)}%`);
console.log(`${(p4 / n * 100).toFixed(2)}%`);
console.log(`${(p5 / n * 100).toFixed(2)}%`);
}
//histogram(["3", "1", "2", "999"])
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
