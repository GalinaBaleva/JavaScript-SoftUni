const { expect } = require('chai');
const testNumbers = require('./testNumbers');


describe("Tests testNumber", () => {
               describe('sumNumbers', () => {
                              it('should return undefined when non-number type is passed', function () {
                                             expect(testNumbers.sumNumbers('1', 1)).to.be.equal(undefined);
                                             expect(testNumbers.sumNumbers(1, '1')).to.be.equal(undefined);
                                             expect(testNumbers.sumNumbers('1', '1')).to.be.equal(undefined);
                                             expect(testNumbers.sumNumbers(null, null)).to.be.equal(undefined);
                                             expect(testNumbers.sumNumbers(null, 1)).to.be.equal(undefined);
                              });
                              it('should return the sum when number type is passed and to be Fixed to 2', () => {
                                             expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
                                             expect(testNumbers.sumNumbers(1.55555, 0.33333)).to.equal('1.89');
                                             expect(testNumbers.sumNumbers(1.5, 1)).to.equal('2.50');
                                             expect(testNumbers.sumNumbers(-1.5, 1)).to.equal('-0.50');

                              })
               });
               describe('numberChecker', () => {
                              it('should throw an Error when not a number is passed', () => {
                                             expect(() => (testNumbers.numberChecker('string'))).to.throw(Error, 'The input is not a number!');
                                             expect(() => (testNumbers.numberChecker(undefined))).to.throw(Error, 'The input is not a number!');

                              });
                              it('should return even number when input is even', () => {
                                             expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
                                             expect(testNumbers.numberChecker(-2)).to.be.equal('The number is even!');
                                             expect(testNumbers.numberChecker('-2')).to.be.equal('The number is even!');
                              });
                              it('should return even number when input is even', () => {
                                             expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!');
                                             expect(testNumbers.numberChecker(-1)).to.be.equal('The number is odd!');
                                             expect(testNumbers.numberChecker('-1')).to.be.equal('The number is odd!');
                              })
               });
               describe('averageSumArray', () => {
                       it('should return array sum', () => {
                                      expect(testNumbers.averageSumArray([1, 1, 1, 1])).to.be.equal(1);
                                      expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.be.equal(3);

                       })       
               });

});