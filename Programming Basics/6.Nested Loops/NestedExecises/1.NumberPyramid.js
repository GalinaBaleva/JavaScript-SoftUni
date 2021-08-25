function NumberPyrmid(input) {
               let num = Number(input[0]);
               let n = 0;
               let isTrue = false;
               for (let row = 1; row <= num; row++) {
                              let stringLine = "";
                              for (let colon = 1; colon <= row; colon++) {
                                             n++;
                                             stringLine += n + " ";
                                             if (n === num) {
                                                            isTrue = true;
                                                            break;
                                             }
                              }
                              console.log(stringLine);
                              if (isTrue) {
                                             break;
                              }
               }
}
NumberPyrmid(["7"])