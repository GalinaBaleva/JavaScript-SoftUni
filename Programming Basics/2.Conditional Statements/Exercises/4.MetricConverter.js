function metricConverter(input) {

               let num = Number(input[0]);
               let inputMertric = input[1];
               let outputMetric = input[2];


               if (inputMertric === "mm") {
                              if (outputMetric === "m") {
                                             num = num / 1000;
                              } else if (outputMetric === "cm") {
                                             num = num / 10;
                              } else if (outputMetric === "mm") {
                                             num = num;
                              }
               } else if (inputMertric === "cm") {
                              if (outputMetric === "m") {
                                             num = num / 100;
                              } else if (outputMetric === "cm") {
                                             num = num;
                              } else if (outputMetric === "mm") {
                                             num = num * 10;
                              }
               }
               else if (inputMertric === "m") {
                              if (outputMetric === "m") {
                                             num = num;
                              } else if (outputMetric === "cm") {
                                             num = num * 100;
                              } else if (outputMetric === "mm") {
                                             num = num * 1000;
                              }

               }
               console.log(num.toFixed(3));
}
metricConverter(["12","mm","m"])
metricConverter(["150", "m", "cm"])
metricConverter(["45", "cm", "mm"])