let { expect } = require('chai');
let StringBuilder = require('./13.StringBuilder');


describe('StringBuilder', () => {
               describe('constructor', () => {
                              it('should initialize with empty array if undefined is passed', () => {
                                             let sb = new StringBuilder(undefined);
                                             expect(sb.toString()).to.be.equal('');
                              })
                              it('should initialize with array with leters if string is passed', () => {
                                             let sb = new StringBuilder('war');
                                             expect(sb.toString()).to.be.equal('war');
                              })
                              it('should throw an Error when input is a number', () => {
                                             expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
                              })
                              it('should throw an Error if passed non-string type', () => {
                                             expect(() => new StringBuilder(true)).throw(TypeError, 'Argument must be a string');
                                             expect(() => new StringBuilder(null)).throw(TypeError, 'Argument must be a string')
                              })

               })
               describe('append', () => {
                              it('should throw an Error when input is a number', () => {
                                             let input = 123;
                                             expect(() => new StringBuilder('car').append(input)).to.throw(TypeError, 'Argument must be a string');
                              })
                              it('should throw an Error if passed non-string type', () => {
                                             expect(() => new StringBuilder('car').append(true)).throw(TypeError, 'Argument must be a string');
                                             expect(() => new StringBuilder('car').append(null)).throw(TypeError, 'Argument must be a string');
                              })

                              it('should append the input if it is a string', () => {
                                             let input = ' is';
                                             let input2 = ' fast';
                                             let sb = new StringBuilder('car');
                                             sb.append(input);
                                             expect(sb.toString()).to.be.equal('car is');

                                             sb.append(input2);
                                             expect(sb.toString()).to.be.equal('car is fast');

                                             sb.remove(6, 1);
                                             expect(sb.toString()).to.be.equal('car isfast');
                              })
               })
               describe('prepend', () => {
                              it('should throw an Error when input is a number', () => {
                                             let input = 123;
                                             expect(() => new StringBuilder('car').prepend(input)).to.throw(TypeError, 'Argument must be a string');
                              })
                              it('should throw an Error if passed non-string type', () => {
                                             expect(() => new StringBuilder('car').prepend(true)).throw(TypeError, 'Argument must be a string');
                                             expect(() => new StringBuilder('car').prepend(null)).throw(TypeError, 'Argument must be a string');
                              })
                              it('should prepend the input if string is passed', () => {
                                             let input = 'is ';
                                             let input2 = 'car ';
                                             let sb = new StringBuilder('fast');
                                             sb.prepend(input);
                                             expect(sb.toString()).to.be.equal('is fast');

                                             sb.prepend(input2);
                                             expect(sb.toString()).to.be.equal('car is fast');

                              })
               })
               describe('insertAt', () => {
                              it('should throw an Error when input is a number', () => {
                                             let input = 123;
                                             expect(() => new StringBuilder('car').insertAt(input, 0)).to.throw(TypeError, 'Argument must be a string');
                              })
                              it('should throw an Error if passed non-string type', () => {
                                             expect(() => new StringBuilder('car').insertAt(true, 0)).throw(TypeError, 'Argument must be a string')
                              })
                              it('should throw an Error if passed non-string type', () => {
                                             expect(() => new StringBuilder('car').insertAt(null, 0)).throw(TypeError, 'Argument must be a string')
                              })
                              it('should insert the input if string is passed', () => {
                                             let input2 = ' is ';
                                             let input = 'fast';
                                             let sb = new StringBuilder('car');

                                             sb.insertAt(input, 3);
                                             expect(sb.toString()).to.be.equal('carfast');

                                             sb.insertAt(input2, 3);
                                             expect(sb.toString()).to.be.equal('car is fast')
                                             
                                             sb.remove(10, 1);
                                             expect(sb.toString()).to.be.equal('car is fas');
                              })
               })
               describe('remove', () => {
                              it('should remove required length', () => {
                                             let sb = new StringBuilder('car is fast');
                                             sb.remove(3, 3);
                                             expect(sb.toString()).to.be.equal('car fast');
                              })
               })
               describe('toString', () => {
                              it('should retutn joined string if string is passed', () => {
                                             let sb = new StringBuilder('car');
                                             expect(sb.toString()).to.be.equal('car');
                              })
               })
})