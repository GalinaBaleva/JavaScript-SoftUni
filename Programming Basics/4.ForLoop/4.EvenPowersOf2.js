function evenSteps(input) {
               let n = Number(input[0]);
               //let num = 1;
               for (let i = 0; i <= n; i += 2) {
                              let result = Math.pow(2, i);
                              console.log(result);

                              //num = num * 2 * 2;
                              //console.log(num);
               }
}
evenSteps(["3"])
evenSteps(["4"])
evenSteps(["5"])
evenSteps(["6"])
evenSteps(["7"])