function leapYear(input) {

               let firstYear = Number(input[0]);
               let secondNumber = Number(input[1]);

               for (let i = firstYear; i <= secondNumber; i += 4) {
                              console.log(i);
               }

}
leapYear(["2020", "2032"])