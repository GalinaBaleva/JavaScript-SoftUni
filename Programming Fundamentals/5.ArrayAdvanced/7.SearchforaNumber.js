function searchForANumber(numbers, commands){
               // count of numbers we must take from beginning  
               let slicedArray = numbers.slice(0, commands[0]);
               // count of number we delete from the beginning of toked numbers 
               slicedArray.splice(0, commands[1]);
               // searching of number, how many times we have it in our array
               let counterOfNum = 0;
               
               while(slicedArray.includes(commands[2])){
                              let index = slicedArray.indexOf(commands[2]);
                              counterOfNum++;
                              slicedArray.splice(index, 1);
               }
               // print result
               console.log(`Number ${commands[2]} occurs ${counterOfNum} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6],
               [5, 2, 3]);