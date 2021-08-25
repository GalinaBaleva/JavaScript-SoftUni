function replaceReatingChars(string){
               string = string.split('');
               let result = [];

               for(let i = 0; i < string.length; i++){
                              if(string[i] === string[i - 1]){
                                             continue;
                              } else {
                                             result.push(string[i]);
                              }
               }
               console.log(result.join(''));
}
replaceReatingChars('aaaaabbbbbcdddeeeedssaa');
replaceReatingChars('qqqwerqwecccwd');