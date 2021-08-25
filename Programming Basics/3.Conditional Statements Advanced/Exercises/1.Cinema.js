function cinema(input) {

               let typesOfProjection = input[0];
               let rous = Number(input[1]);
               let colons = Number(input[2]);
               let totalSum = 0;

               if (typesOfProjection === "Premiere") {
                              totalSum = rous * colons * 12;
               } else if (typesOfProjection === "Normal") {
                              totalSum = rous * colons * 7.50;
               } else if (typesOfProjection === "Discount") {
                              totalSum = rous * colons * 5.00;
               }
               console.log(`${totalSum.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])