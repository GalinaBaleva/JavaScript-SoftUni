function personAndTeacher() {
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
                              constructor(name, email, course){
                                             super(name, email);
                                             this.course = course;
                              }
                              toString(){
                                         return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;                   
                              }
               }

               return {
                              Person,
                              Teacher,
                              Student
               }
}

let t = new Teacher('pesho', 'pesho@gmail.com', 'Mathematics')
console.log(t)
let p = new Person('pesho', 'pesho@gmail.com', 'Mathematics')
console.log(p)
let s = new Student('pesho', 'pesho@gmail.com', 'Mathematics')
console.log(s)