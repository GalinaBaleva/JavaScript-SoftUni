function solve(input) {
               class Cat {
                              constructor(name, age) {
                                             this.name = name;
                                             this.age = age;
                              }
                              meow(){
                                             console.log(`${this.name}, age ${this.age} says Meow`);
                              }
               }
               let cats = [];
               for(let i = 0; i < input.length; i++){
                              let [name, age] = input[i].split(' ');
                              cats.push(new Cat(name, age));
               }
               for(let cat of cats){
                              cat.meow()
               }

               
}
solve(['Mellow 2', 'Tom 5']);