function repeatString(array, n){
               let newArray = [];

               for(let i = 0; i < n; i++){
                              newArray.push(array);
               }
               console.log(newArray.join(''));

}
repeatString('abc', 3);
repeatString('String', 2);