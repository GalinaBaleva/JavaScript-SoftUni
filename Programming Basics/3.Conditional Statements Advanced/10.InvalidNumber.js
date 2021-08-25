function invalidNumber(input) {
               let num = Number(input[0]);

               if (!(num >= 100 && num <= 200 || num === 0)) {
                              console.log(`invalid`);
               }
}
invalidNumber(["75"])
invalidNumber(["150"])
invalidNumber(["220"])
invalidNumber(["199"])
invalidNumber(["-1"])
invalidNumber(["100"])
invalidNumber(["200"])
invalidNumber(["0"])