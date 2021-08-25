function triangleOfNumbers(n) {
               let current = '';
               for (let i = 1; i <= n; i++) {
                              let current = '';
                              for (let j = 1; j <= i; j++) {
                                             current += i + ' ';
                              }
                              console.log(current)
               }
}
triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6)