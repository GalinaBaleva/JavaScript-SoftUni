function leap(year) {
               if (year % 4 === 0) {
                              if (year % 100 === 0 && year % 400 !== 0) {
                                             console.log(`no`);
                              } else {
                                             console.log(`yes`);
                              }

               } else {
                              console.log(`no`);
               }

}
// leap(1984);
// leap(2003);
// leap(4);
// leap(2000)
leap(1900)