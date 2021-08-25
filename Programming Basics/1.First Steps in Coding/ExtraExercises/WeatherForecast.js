function weatherForecast(input) {
               let wether = input[0];
               if (wether === "sunny") {
                              console.log(`It's warm outside!`);
               } else if (wether === "cloudy") {
                              console.log(`It's cold outside!`);
               } else if (wether === "snowy") {
                              console.log(`It's cold outside!`);
               }
}
weatherForecast(["sunny"])
weatherForecast(["cloudy"])
weatherForecast(["snowy"])