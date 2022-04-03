const { expect } = require('chai');
const rentCar = require('./3.rentCar');

describe('', function () {
               describe('searchCar', function () {
                              it('throw an Error if first input is not array and model not string', function () {
                                             expect(() => (rentCar.searchCar(['Audi'], 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(['Audi'], undefined))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(['Audi'], null))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(['Audi'], NaN))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(['Audi'], ['Audi']))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar('string', 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(undefined, 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(NaN, 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar(null, 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.searchCar({}, 'Audi'))).to.throw(Error, `Invalid input!`)
                              });
                              it('throw an Error if the catalog is empty', function () {
                                             expect(() => (rentCar.searchCar([], 'Audi'))).to.throw(Error, `There are no such models in the catalog!`)
                                             expect(() => (rentCar.searchCar(['BMV', 'Toyota', 'Mercedes'], 'Audi'))).to.throw(Error, `There are no such models in the catalog!`)
                              });
                              it('return right answer if correct inputs are passed', function () {
                                             expect(rentCar.searchCar(['Audi'], 'Audi')).to.be.equal(`There is 1 car of model Audi in the catalog!`);
                                             expect(rentCar.searchCar(['BMV', 'Toyota', 'Audi', 'Mercedes', 'Audi'], 'Audi')).to.be.equal(`There is 2 car of model Audi in the catalog!`);
                                             expect(rentCar.searchCar(['Audi'], 'Audi')).to.be.equal(`There is 1 car of model Audi in the catalog!`);
                              });
               });
               describe('calculatePriceOfCar', function () {
                              it('throw an Error if first input is not a string and second not a number', function () {
                                             expect(() => (rentCar.calculatePriceOfCar(['Audi'], 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar('Audi', undefined))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar('Audi', null))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar('Audi', NaN))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar('Audi', 'Audi'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar(undefined, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar(NaN, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar(null, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.calculatePriceOfCar({}, 1))).to.throw(Error, `Invalid input!`)
                              });
                              it('throw an Error if in the catalogue is no such model and empty string is passed', function () {
                                             expect(() => (rentCar.calculatePriceOfCar('Lada', 1))).to.throw(Error, `No such model in the catalog!`)
                                             expect(() => (rentCar.calculatePriceOfCar('', 1))).to.throw(Error, `No such model in the catalog!`)
                              });
                              it('correct inputs are passed', function () {
                                             expect(rentCar.calculatePriceOfCar('Audi', 1)).to.be.equal(`You choose Audi and it will cost $36!`);
                                             expect(rentCar.calculatePriceOfCar('Audi', 2)).to.be.equal(`You choose Audi and it will cost $72!`);
                                             expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.be.equal(`You choose Volkswagen and it will cost $40!`);
                                             expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.be.equal(`You choose Volkswagen and it will cost $20!`);
                                             expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.be.equal(`You choose Toyota and it will cost $80!`);
                                             expect(rentCar.calculatePriceOfCar('Toyota', 1)).to.be.equal(`You choose Toyota and it will cost $40!`);
                                             expect(rentCar.calculatePriceOfCar('BMW', 2)).to.be.equal(`You choose BMW and it will cost $90!`);
                                             expect(rentCar.calculatePriceOfCar('BMW', 1)).to.be.equal(`You choose BMW and it will cost $45!`);
                                             expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.equal(`You choose Mercedes and it will cost $100!`);
                                             expect(rentCar.calculatePriceOfCar('Mercedes', 1)).to.be.equal(`You choose Mercedes and it will cost $50!`);
                              });
               });
               describe('checkBudget', function () {
                              it('throw an Error if non-number inputs are passed', function () {
                                             expect(() => (rentCar.checkBudget('s', 's', 's'))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget('s', 's', 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget('s', 1, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(1, 's', 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(undefined, 1, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(undefined, null, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(2, null, 1))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(undefined, null, NaN))).to.throw(Error, `Invalid input!`)
                                             expect(() => (rentCar.checkBudget(1, null, NaN))).to.throw(Error, `Invalid input!`)
                              });
                              it('throw an Error if cost is smoller then budget', function () {
                                             expect(rentCar.checkBudget(2, 2, 1)).to.be.equal(`You need a bigger budget!`)
                              });
                              it('return correct answer if correct inputs are passed', function () {
                                             expect(rentCar.checkBudget(1, 2, 2)).to.be.equal(`You rent a car!`)
                                             expect(rentCar.checkBudget(2, 2, 5)).to.be.equal(`You rent a car!`)

                              });
                              it('', function () {

                              });
               });


});