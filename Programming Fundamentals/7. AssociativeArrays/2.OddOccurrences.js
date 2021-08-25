function oddOccurrences(input) {
               let splitedInput = input.split(' ');
               let result = {};

               for (let key of splitedInput) {
                              let current = key.toLowerCase();
                              if (!result.hasOwnProperty(current)) {
                                             result[current] = 0;
                              }

                              if (result.hasOwnProperty(current)) {
                                             result[current]++;
                              }
               };
               let lastResult = [];
               for (let key of Object.entries(result)) {
                              if (key[1] % 2 !== 0){
                                             lastResult.push(key[0]);
                              }
}
               console.log(lastResult.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');