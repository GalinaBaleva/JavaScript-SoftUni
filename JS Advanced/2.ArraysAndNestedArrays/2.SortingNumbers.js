function sortingNumbers(arrayOfNumbers){

               let newArray = [];
               arrayOfNumbers.sort((a, b) => a - b);
               let index = 0;

               while (arrayOfNumbers.length != 0){
                              let min = arrayOfNumbers.shift();
                              let max = arrayOfNumbers.pop();

                              newArray.push(min);
                              newArray.push(max);
               } 
               return newArray;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

