'use strict';
const person = {
               name: 'Peter',
               age: 28,
}
console.log(Object.defineProperty(person, 'lastName', {
               value: 'Jackson',
               writable: true,
               enumerable: true,
               configurable: true
}));
person.lastName = 'Willson'//we can chenge the varible is writable is true; 

delete(person.lastName)//we can delete when configuravle is true

for(let key in person){//we can use the for-in loop to iterate the object if enumerable is true;
               console.log(key + ' ' + person[key]);
}