function pascelCaseSplitter(text) {
               text = text.split('');
               let result = [];
               let temporal = '';

               for (let i = 0; i <= text.length; i++) {
                              if(i === text.length){
                                        result.push(temporal);     
                                        continue;
                              }
                              if (text[i] == text[i].toLocaleUpperCase()) {
                                             if (i > 0) {
                                                            result.push(temporal);
                                                            temporal = '';
                                             }
                                             temporal = text[i];
                              } else {
                                             temporal += text[i];
                              }
               }
               console.log(result.join(', '));
}
pascelCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascelCaseSplitter('HoldTheDoor');
pascelCaseSplitter('ThisIsSoAnnoyingToDo');