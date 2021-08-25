function ads(input) {
               let numADSNeeds = Number(input[0])
               let numPersons = Number(input[1])
               let workDays = Number(input[2])

               let totalHours = numPersons * workDays * 8;
               let totalAds = Math.trunc(totalHours / 3)



               if (totalAds >= numADSNeeds) {
                              let plus = totalAds - numADSNeeds
                              let total = (plus * 110.10).toFixed(2)
                              console.log(`Profit: -> ${total} BGN`)
               } else {
                              let loos = numADSNeeds - totalAds
                              let totalsumLoos = (loos * 110.10).toFixed(2)
                              console.log(`Losses: -> ${totalsumLoos} BGN`)
               }

}
ads(["500", "8", "20"])
ads(["150", "7", "18"])
