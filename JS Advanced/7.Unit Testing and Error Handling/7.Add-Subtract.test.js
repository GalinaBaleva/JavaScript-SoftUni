const { expect } = require('chai');
const { createCalculator } = require('./7.Add-Subtract');

describe('addOrSubtract', () => {
               let instance = null;
               beforeEach(() => {
                              instance = createCalculator();
               });

               it('has all methods', () => {
                              expect(instance).to.has.ownProperty('add');
                              expect(instance).to.has.ownProperty('subtract');
                              expect(instance).to.has.ownProperty('get');
               });

               it('adding single number', () => {
                              instance.add(1);
                              expect(instance.get()).to.be.equal(1);
               });
               it('adding two numbers', () => {
                              instance.add(1);
                              instance.add(2);
                              expect(instance.get()).to.be.equal(3);
               });
               it('adding and subtracting', () => {
                              instance.add(1);
                              instance.subtract(2);
                              expect(instance.get()).to.be.equal(-1);
               });
               it('adding number as a string', () => {
                              instance.add('1');
                              expect(instance.get()).to.be.equal(1);
               });
               it('subtract number as a string', () => {
                              instance.add(1);
                              instance.subtract('2');
                              expect(instance.get()).to.be.equal(-1);
               })
})