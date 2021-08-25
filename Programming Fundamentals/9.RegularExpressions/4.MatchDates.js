function matchDates(string){
               let pattern = /\b(?<day>\d{2})([/|\.|-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

               let result = [];

               let data = pattern.exec(string);
               while(data !== null){
                              result.push(data);
                              let day = data.groups['day'];
                              let month = data.groups['month'];
                              let year = data.groups['year'];
                              console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
                              data = pattern.exec(string);
               }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");