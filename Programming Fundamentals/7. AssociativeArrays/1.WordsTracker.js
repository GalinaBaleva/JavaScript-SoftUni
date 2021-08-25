function wordsTracker(arr){
               let words = arr.shift().split(' ');

               let wordObj = {};

               for(let word of words){
                              wordObj[word] = 0;
               }
               
               for(let word of arr){
                              if(wordObj.hasOwnProperty(word)){
                                             wordObj[word]++;
                              }
               }
              
               for(let key of Object.entries(wordObj).sort((a, b) => b[1] - a[1])){
                              console.log(`${key[0]} - ${key[1]}`)
               }
                              

}
wordsTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
               ,'words','this','and','sentence','because','this','is','your','task'
               ]);