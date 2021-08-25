function cilsiusToFahrenheit(input){
let celsius = Number(input[0]);
let fahrebheit = celsius * 1.8 + 32;

console.log(fahrebheit.toFixed(2));
}
cilsiusToFahrenheit(["25"])