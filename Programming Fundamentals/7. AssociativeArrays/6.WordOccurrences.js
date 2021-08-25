function wordOccurrences(input) {
               let map = new Map();

               for (let word of input) {
                              if (!map.has(word)) {
                                             map.set(word, []);
                                             let currentCount = 1;
                                             map.set(word, currentCount);
                              } else {
                                             let currentCount = Number(map.get(word));
                                             currentCount += 1;
                                             map.set(word, currentCount)
                              }
               }
               let sorted = Array.from(map);
               sorted.sort((a, b) => (b[1] - a[1]));

               for (let key of sorted) {
                              console.log(`${key[0]} -> ${key[1]} times`)
               }


}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);