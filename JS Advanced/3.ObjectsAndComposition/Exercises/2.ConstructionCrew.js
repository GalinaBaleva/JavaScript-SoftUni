function constructionCrew(obj) {
               if(obj.dizziness === true){
                              obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience;
                              obj.dizziness = false;
               }
               return obj;
}
// let result = constructionCrew({
//                weight: 80,
//                experience: 1,
//                levelOfHydrated: 0,
//                dizziness: true
// });
// console.log(result);
// let result = constructionCrew({
//                weight: 120,
//                experience: 20,
//                levelOfHydrated: 200,
//                dizziness: true
// });
// console.log(result);
let result = constructionCrew({
               weight: 95,
               experience: 3,
               levelOfHydrated: 0,
               dizziness: false
});
console.log(result);