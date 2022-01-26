const {expect} = require('chai');
const mathEnforcer = require('./4.MathEnforcer');

describe('mathEnforcer', () =>{


               describe('addFive', () => {
                              it('parameter is not a number', () => {
                                             expect(mathEnforcer.addFive('sdfg')).to.be.undefined;
                                             expect(mathEnforcer.addFive('1')).to.be.undefined;
                                             expect(mathEnforcer.addFive([1])).to.be.undefined;
                                             expect(mathEnforcer.addFive({})).to.be.undefined;
                              });
                              it('parameter is a number, add 5', () => {
                                             expect(mathEnforcer.addFive(0)).to.be.equal(5);
                                             expect(mathEnforcer.addFive(1)).to.be.equal(6);
                                             expect(mathEnforcer.addFive(-1)).to.be.equal(4);
                                             expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
                                             expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1);
                              })
               });
               describe('subtractTen', () => {
                              it('parameter is not a number', () => {
                                             expect(mathEnforcer.subtractTen('dasd')).to.be.undefined;
                                             expect(mathEnforcer.subtractTen('1')).to.be.undefined;
                                             expect(mathEnforcer.subtractTen([])).to.be.undefined;
                                             expect(mathEnforcer.subtractTen({})).to.be.undefined;
                              }); 
                              it('parameter is a number, subtract 10', () => {
                                             expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
                                             expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
                                             expect(mathEnforcer.subtractTen(11.1)).to.be.closeTo(1.1, 0.1);
                              })    
               });
               describe('sum', () => {
                              it('parameter is not a number', () => {
                                             expect(mathEnforcer.sum('asd', 1)).to.be.undefined;
                                             expect(mathEnforcer.sum('1', 1)).to.be.undefined;
                                             expect(mathEnforcer.sum([], 1)).to.be.undefined;
                                             expect(mathEnforcer.sum({}, 1)).to.be.undefined;
                                             expect(mathEnforcer.sum(1, '')).to.be.undefined;
                                             expect(mathEnforcer.sum(1, '1')).to.be.undefined;
                                             expect(mathEnforcer.sum(1, [])).to.be.undefined;
                                             expect(mathEnforcer.sum(1, {})).to.be.undefined;
                              }); 
                              it('parameter is a number, subtract 10', () => {
                                             expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
                                             expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
                                             expect(mathEnforcer.sum(1, -1)).to.be.equal(0);
                                             expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0,1);
                              }) 
               });
});