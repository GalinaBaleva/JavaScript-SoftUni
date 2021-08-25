// function smallestOfThreeNumbers(num1, num2, num3){
//                console.log(Math.min(num1, num2, num3));
// }
// smallestOfThreeNumbers(2, 5, 3);
// smallestOfThreeNumbers(600, 342, 123);
// smallestOfThreeNumbers(25, 21, 4);

function getSmallestOfThreeNumbers(num1, num2, num3){
               let smallestNumber = Math.min(num1, num2, num3);
               return smallestNumber;
}
console.log(getSmallestOfThreeNumbers(2, 5, 3));
console.log(getSmallestOfThreeNumbers(600, 342, 123));
console.log(getSmallestOfThreeNumbers(25, 21, 4));