function metricConverter(input) { 

               let num = Number(input[0]);
               let inputMertric = input[1];
               let outputMetric = input[2];


               if (inputMertric === "mm") { //Конвертираме всичко към метри
               num = num / 1000;
               } else if (inputMertric === "cm") {
               num = num / 100;
               } else if (inputMertric === "m") {
               num = num;
               }
if (outputMetric === "mm") {
               console.log((num * 1000).toFixed(3));
} else if (outputMetric === "cm"){
               console.log((num * 100).toFixed(3));
} else if (outputMetric === "m") {
               console.log(num.toFixed(3));
}
}
metricConverter(["12","mm","m"])
metricConverter(["150", "m", "cm"])
metricConverter(["45", "cm", "mm"])