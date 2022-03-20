
class Person {
               constructor(name, email) {
                              this.name = name;
                              this.email = email;
               }
               toSrting() {
                              return `Person (name: ${this.name}, email: ${this.email})`;
               }
}

class Teacher extends Person {
               constructor(name, email, subject) {
                              super(name, email);
                              this.subject = subject
               }
               toString() {
                              return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
               }
}
class Student extends Person {
               constructor(name, email, course) {
                              super(name, email);
                              this.course = course;
               }
               toString() {
                              return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
               }
}
function extendProrotype(classToExtend) {
               classToExtend.prototype.species = 'Human';
               classToExtend.prototype.toSpeciesString = function () {
                              return `I am a ${this.species}. ${this.toString()}`;
               }
}


extendProrotype(Person)
let p = new Person("Pesho", "email@hit.bg");
console.log(p.species)//'Human', "No species property");
console.log(p.toSpeciesString())//).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");