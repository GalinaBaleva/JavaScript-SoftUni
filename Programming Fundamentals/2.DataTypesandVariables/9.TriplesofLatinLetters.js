function triplesOfLatinLetters(num) {
               let number = Number(num);
               for (let i = 0; i < number; i++) {
                              let firstLetter = String.fromCharCode(97 + i)
                              for (let j = 0; j < number; j++) {
                                             let secondLetter = String.fromCharCode(97 + j)
                                             for (let k = 0; k < number; k++) {
                                                            let thirdLetter = String.fromCharCode(97 + k)
                                                            console.log(`${firstLetter}${secondLetter}${thirdLetter}`)
                                             }
                              }
               }
}
triplesOfLatinLetters(3);