function gold(input) {

               let locals = Number(input[0])
               let index = 1;

               let midleNeeds = 0
               let numDays = 0
               let midelGoldDay = 0;

               for (let a = 1; a <= locals; a++) {
                              midleNeeds = Number(input[index++])
                              numDays = Number(input[index++])
                              midelGoldDay = 0;
                              for (let i = 1; i <= numDays; i++) {
                                             let currentNum = Number(input[index++])
                                             midelGoldDay += currentNum;


                              }
                              let total = midelGoldDay / numDays

                              if (total >= midleNeeds) {
                                             console.log(`Good job! Average gold per day: ${total.toFixed(2)}.`)
                              } else {
                                             let loos = midleNeeds - total
                                             console.log(`You need ${loos.toFixed(2)} gold.`)
                              }


               }
}
gold(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])
gold(["1", "5", "3", "10", "1", "3"])