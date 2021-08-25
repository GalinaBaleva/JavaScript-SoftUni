function swimmingRecord (input){
let recordInSec = Number(input[0]);
let distanceInMeters = Number(input[1]);
let timeInSeconds = Number(input[2]);

let requiredTime = distanceInMeters * timeInSeconds;
let delayTime = Math.floor(distanceInMeters / 15) * 12.5;
let totalTime = requiredTime + delayTime;

if (recordInSec > totalTime){
               console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
} else {
               console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
} 
}
swimmingRecord(["10464","1500","20"])
swimmingRecord(["55555.67","3017","5.03"])