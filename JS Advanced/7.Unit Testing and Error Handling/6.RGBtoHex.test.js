const { expect } = require('chai');
const rgbToHexColor = require('./6.RGBtoHex');

describe('rgbToHex Checker', () => {
               it('convert to wite', () => {
                              expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
               });
               it('convert to black', () => {
                              expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
               });
               it('convert to non-existing color', () => {
                              expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
               });
               it('convert to non-existing color', () => {
                              expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
               });
               it('one of the lowest number with invalid type of parameters', () => {
                              expect(rgbToHexColor(1, 1, '1')).to.be.undefined;
                              expect(rgbToHexColor(1, '1', 1)).to.be.undefined;
                              expect(rgbToHexColor('1', 1, 1)).to.be.undefined;
               });
               it('two lowest numbers with invalid type of parameters', () => {
                              expect(rgbToHexColor(1, '1', '1')).to.be.undefined;
                              expect(rgbToHexColor('1', '1', 1)).to.be.undefined;
                              expect(rgbToHexColor('1', 1, '1')).to.be.undefined;
                              expect(rgbToHexColor('1', '1', '1')).to.be.undefined;
               });
               it('two highest numbers with invalid type of parameters', () => {
                              expect(rgbToHexColor(255, '255', '255')).to.be.undefined;
                              expect(rgbToHexColor('255', '255', 255)).to.be.undefined;
                              expect(rgbToHexColor('255', 255, '255')).to.be.undefined;
                              expect(rgbToHexColor('255', '255', '255')).to.be.undefined;
               });

})