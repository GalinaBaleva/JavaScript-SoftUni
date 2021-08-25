function matchPhoneNumber(string){
               let pattern = /(?<!\d)\+359([-|\s])2\1\d{3}\1\d{4}\b/g;
               let result = [];
               let number = pattern.exec(string);
               while (number !== null){
                              result.push(number[0]);
                              number = pattern.exec(string);         
               }
               console.log(result.join(', '))
}
// function matchPhoneNumber(string){
//                let pattern = /(?<!\d)\+359([-|\s])2\1\d{3}\1\d{4}\b/g;
//                let number = string.toString().match(pattern);

//                console.log(number.join(', '))

// }
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");