function projectsCreation(input){
let nameOfArchitect = input[0];
let numbOfProjects = Number(input[1]);
let neseseryHours = numbOfProjects * 3;


console.log(`The architect ${nameOfArchitect} will need ${neseseryHours} hours to complete ${numbOfProjects} project/s.`);
}
projectsCreation(['George', '4'])