function sumFirstAnaLast(arr){
               let firstElement = Number(arr.shift());
               let lastElement = Number(arr.pop());

               let sum = firstElement + lastElement;
               return sum;
}
let result = sumFirstAnaLast(['20', '30', '40']);
console.log(result);