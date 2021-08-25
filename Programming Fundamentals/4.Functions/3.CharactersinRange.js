function characterInRange(char1, char2){
               let minNumber = char1.charCodeAt(0);
               let maxNumber = char2.charCodeAt(0);

               if(minNumber > maxNumber){
                              let temp = minNumber;
                              minNumber = maxNumber;
                              maxNumber = temp;
                              
               }

               let result = '';

               for(let i = minNumber + 1; i < maxNumber; i++){
                              let currentChar = String.fromCharCode(i);
                              result += currentChar + ' ';
               }
               return result;
}
let result = characterInRange('C', '#');
console.log(result)