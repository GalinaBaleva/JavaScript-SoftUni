function timeToWalk(stepsToUni, lengthFootprintMeters, speedKmH) {
let dist = stepsToUni * lengthFootprintMeters;
let time = Math.round(dist / speedKmH * 3.6);
time += Math.floor(dist / 500) * 60;

console.log(time)
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);