const {rgbToHexColor} = require('./6.RGBtoHEX');
const {expect} = require('chai');

describe("RBG to HEX check",()=>{
    it("converts right",()=>{
        expect(rgbToHexColor(252, 186, 3)).to.equal("#FCBA03")
    })
    it("converts white",()=>{
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF")
    })
    it("converts black",()=>{
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000")
    })
    it('does not take 2 numbers',()=>{
        expect(rgbToHexColor(233,180)).to.be.undefined;
    })
    it('does not take 1 number',()=>{
        expect(rgbToHexColor(233)).to.be.undefined;
    })
    it('does not take strings 1',()=>{
        expect(rgbToHexColor("252", 186, 3)).to.be.undefined;
    })
    it('does not take strings 2',()=>{
        expect(rgbToHexColor(252, "186", 3)).to.be.undefined;
    })
    it('does not take strings 3',()=>{
        expect(rgbToHexColor(252, 186, "3")).to.be.undefined;
    })
    it('first number must be within range above',()=>{
        expect(rgbToHexColor(256, 186, 3)).to.be.undefined;
    })
    it('first number must be within range below',()=>{
        expect(rgbToHexColor(-1, 186, 3)).to.be.undefined;
    })
    it('second number must be within range above',()=>{
        expect(rgbToHexColor(24, 256, 3)).to.be.undefined;
    })
    it('second number must be within range below',()=>{
        expect(rgbToHexColor(1, -1, 3)).to.be.undefined;
    })
    it('third number must be within range above',()=>{
        expect(rgbToHexColor(56, 186, 256)).to.be.undefined;
    })
    it('third number must be within range below',()=>{
        expect(rgbToHexColor(1, 186, -1)).to.be.undefined;
    })
    it('returns a string',()=>{
        expect(typeof rgbToHexColor(1, 186, 1)).to.equal("string");
    })
})