let { expect } = require('chai');
let PaymentPackage = require('./17.PaymentPackage');

describe('PaymentPachage', () => {
               describe('constructor', () => {
                              it('should correctly return all constructors data if passed name is a string and value is a number', () => {
                                             let package = new PaymentPackage('Meffi', 1);
                                             expect(package.name).to.be.equal('Meffi');
                                             expect(package.value).to.be.equal(1);
                                             expect(package.VAT).to.be.equal(20);
                                             expect(package.active).to.be.equal(true);
                              })
               })
               describe('name', () => {
                              it('should throw an Error if non-string type is passed', () => {
                                             expect(() => new PaymentPackage(20, 1)).throw(Error, 'Name must be a non-empty string');
                              })
                              it('should throw an Error if strings length is 0', () => {
                                             expect(() => new PaymentPackage('', 1)).throw(Error, 'Name must be a non-empty string');
                              })
                              it('throwing error for non-string types', () => {
                                             let package = new PaymentPackage('Meffi', 1);
                                             expect(() => package.name = '').throw(Error, 'Name must be a non-empty string');
                                             expect(() => package.name = 1).throw(Error, 'Name must be a non-empty string');
                                             expect(() => package.name = null).throw(Error, 'Name must be a non-empty string');
                                             expect(() => package.name = undefined).throw(Error, 'Name must be a non-empty string');
                              })
               })
               describe('value', () => {
                              it('should throw an Error if non-number type is passed', () => {
                                             expect(() => new PaymentPackage('Muffi', '1')).throw(Error, 'Value must be a non-negative number');
                              })
                              it('should throw an Error if the passed number is less than 0', () => {
                                             expect(() => new PaymentPackage('Muffi', -1)).throw(Error, 'Value must be a non-negative number');
                              })
                              it('should correctly returning the value if 0 is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             package.value = 1;
                                             expect(package.value).to.be.equal(1);
                                             package.value = 0;
                                             expect(package.value).to.be.equal(0);
                              })
               })
               describe('VAT', () => {
                              it('should throw an Error if non-number type is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             expect(() => package.VAT = '1').throw(Error, 'VAT must be a non-negative number');
                                             expect(() => package.VAT = null).throw(Error, 'VAT must be a non-negative number');
                                             expect(() => package.VAT = true).throw(Error, 'VAT must be a non-negative number');
                                             expect(() => package.VAT = undefined).throw(Error, 'VAT must be a non-negative number');

                              })
                              it('should throw an Error if negativ number is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             expect(() => package.VAT = -1).throw(Error, 'VAT must be a non-negative number');
                              })
                              it('should return VAT if number is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             package.VAT = 1;
                                             expect(package.VAT).to.be.equal(1);
                                             package.VAT = 0;
                                             expect(package.VAT).to.be.equal(0);
                              })
               })
               describe('active', () => {
                              it('should throw an Error if non-boolean type is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             expect(() => package.active = '1').throw(Error, 'Active status must be a boolean');
                                             expect(() => package.active = null).throw(Error, 'Active status must be a boolean');
                                             expect(() => package.active = 1).throw(Error, 'Active status must be a boolean');
                                             expect(() => package.active = undefined).throw(Error, 'Active status must be a boolean');

                              })
                              it('should return active if boolean is passed', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             package.active = false;
                                             expect(package.active).to.be.equal(false);
                              })
               })
               describe('toString', () => {
                              it('should return joined array if active is false', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             package.VAT = 1;
                                             package.active = false;
                                             package.name = 'Lily';
                                             package.value = 2;
                                             expect(package.toString()).to.be.equal(`Package: Lily (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 1%): 2.02`)
                              })
                              it('should return joined array if active is true', () => {
                                             let package = new PaymentPackage('Muffi', 1);
                                             package.VAT = 1;
                                             package.active = true;
                                             package.name = 'Lily';
                                             package.value = 2;
                                             expect(package.toString()).to.be.equal(`Package: Lily\n- Value (excl. VAT): 2\n- Value (VAT 1%): 2.02`)
                              })

               })
})

