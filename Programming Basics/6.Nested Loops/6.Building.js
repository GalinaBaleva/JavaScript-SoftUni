function building(input) {
               let index = 0;
               let flors = Number(input[index++]);
               let numOfApartments = Number(input[index]);
               for (let f = flors; f >= 1; f--) {
                              let finalResult = "";
                              for (let n = 0; n <= numOfApartments - 1; n++) {

                                             if (f === flors) {
                                                            finalResult += `L${f}${n} `
                                             } else if (f % 2 === 0) {
                                                            finalResult += `O${f}${n} `

                                             } else {
                                                            finalResult += `A${f}${n} `
                                             }

                              }
                              console.log(finalResult);
               }
}
building(["6", "4"])
//building(["9", "5"])
//building(["4", "4"])