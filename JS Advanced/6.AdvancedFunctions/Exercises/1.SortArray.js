function sortArray(numbers, commands) {
               
               let functions = {
                              asc: (...ar) =>  ar.sort((a, b) => a - b),
                              desc: (...ar) =>  ar.sort((a, b) => b - a)
               }

               let result = functions[commands].apply(null, numbers)
               console.log(result);
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');