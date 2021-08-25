function solve(input) {
               let days = Number(input[0]);
               let kmCurrDay = Number(input[1]);
               let totalKm = kmCurrDay;

               for (let i = 2; i <= days + 1; i++) {
                              let curPerc = Number(input[i]);
                              let currKm = ((100 + curPerc) / 100) * kmCurrDay;
                              totalKm += currKm;
                              kmCurrDay = currKm;
               }
               if (totalKm >= 1000) {
                              console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`)
               } else {
                              console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`)
               }
}
solve(["5", "30", "10", "15", "20", "5", "12"])
solve(["4", "100", "30", "50", "60", "80", "12"])