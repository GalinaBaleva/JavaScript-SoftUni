function smallestTowNumbers(arr){
               let result = arr
               .sort((a, b) => a - b)
               .slice(0, 2)
               .join(' ');
               return result;
}
let result = smallestTowNumbers([3, 0, 10, 4, 7, 3]);
console.log(result);