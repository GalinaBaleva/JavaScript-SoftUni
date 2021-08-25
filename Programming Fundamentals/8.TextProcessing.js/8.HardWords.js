function hardWords(array){
               let text = array.shift().split(' ');
               array = array.shift()
               let result = [];
               
               for(let current of text){
                              if(current.includes('_')){
                                             let dot = current.split('').filter(x => x != '_');
                                             current = current.split('').filter(x => x == '_');
                                              
                                             for(let i = 0; i < array.length; i++){
                                                            if(current.length == array[i].length){
                                                                           current = array[i] + dot;
                                                                           break;
                                                            } else {
                                                                           continue;
                                                            }
                                             }
                              }
                              result.push(current);
               }
               console.log(result.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____! to write to you. ______? the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);