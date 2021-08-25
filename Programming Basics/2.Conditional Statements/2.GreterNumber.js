function greterNumber(input) {
               let a = Number(input[0]);
               let b = Number(input[1]);
               if (a > b) {
                              console.log(a);
               } else {
                              console.log(b)
               }
}

greterNumber(["5", "3"])
greterNumber(["3", "5"])
greterNumber(["10", "10"])
greterNumber(["-5", "5"])