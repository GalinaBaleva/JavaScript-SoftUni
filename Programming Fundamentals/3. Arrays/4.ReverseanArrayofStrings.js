function reverseanArrayofStrings(array) {
               // for (let i = 0; i <= (array.length - 1) / 2; i++) {
               //                let k = array.length - 1 - [i];
               //                let tempArray = array[i];
               //                array[i] = array[k];
               //                array[k] = tempArray;
               // }
               // console.log(array.join(','));
               let k = array.length - 1;
               for (let i = 0; i <= (array.length - 1) / 2; i++, k--) {
                              let tempArray = array[i];
                              array[i] = array[k];
                              array[k] = tempArray;
               }
               console.log(array.join(','));


}
reverseanArrayofStrings(['a', 'b', 'c', 'd', 'e']);
reverseanArrayofStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseanArrayofStrings(['33', '123', '0', 'dd']);