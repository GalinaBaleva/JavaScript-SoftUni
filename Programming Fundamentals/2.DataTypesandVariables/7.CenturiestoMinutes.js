function centuriesToMinutes(centuriesNum) {

               let years = (centuriesNum * 100).toFixed();
               let days = Math.trunc(years * 365.2422);
               let hours = (days * 24).toFixed();
               let minutes = (hours * 60).toFixed();

               console.log(`${centuriesNum} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes
               `);
}
centuriesToMinutes(1);
centuriesToMinutes(5);