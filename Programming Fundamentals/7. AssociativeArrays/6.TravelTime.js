function travelTime(arrAsStrings) {
               let countriesObj = {};

               for (let info of arrAsStrings) {
                              let [country, town, price] = info.split(' > ');
                              price = Number(price);

                              if (!countriesObj.hasOwnProperty(country)) {
                                             countriesObj[country] = {};
                              }
                              if (!countriesObj[country].hasOwnProperty(town)) {
                                             countriesObj[country][town] = price;
                              }
                              if (countriesObj[country][town] > price) {
                                             countriesObj[country][town] = price;
                              }
               }
               let sortedCountries = Object.entries(countriesObj).sort((a, b) => a[0].localeCompare(b[0]));
               for (let [key, town] of sortedCountries) {
                              let sorted = Object.entries(town).sort((a, b) => a[1] - b[1]).map(x => `${x[0]} -> ${x[1]}`);
                              console.log(`${key} -> ${sorted.join(' ')}`);

               }
}
travelTime([
               "Bulgaria > Sofia > 500",
               "Bulgaria > Sopot > 800",
               "France > Paris > 2000",
               "Albania > Tirana > 1000",
               "Bulgaria > Sofia > 200"
])