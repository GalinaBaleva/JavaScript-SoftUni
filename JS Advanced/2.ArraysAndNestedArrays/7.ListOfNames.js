function listOfNames(arrOfNames){
               arrOfNames.sort((a, b) => a.localeCompare(b));

               for(let i = 0; i < arrOfNames.length; i++){
                              console.log(`${i+1}.${arrOfNames[i]}`);
               }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
