const {expect} = require('chai');
const {isSymmetric} = require('./5.checkForSymmetry');

describe("Check symmety",()=>{
    it("does not take str",()=>{
        expect(isSymmetric('str')).to.be.false;
    })
    it("does not take num",()=>{
        expect(isSymmetric(4)).to.be.false;
    })
    it("does not take obj",()=>{
        expect(isSymmetric({})).to.be.false;
    })
    it("returns true to symmetric arrays",()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true;
    })
    it("returns true to odd lenght arrays",()=>{
        expect(isSymmetric([1,2,1])).to.be.true;
    })
    it("returns true to single lenght arrays",()=>{
        expect(isSymmetric([1])).to.be.true;
    })
    it("returns true to string arrays",()=>{
        expect(isSymmetric(["abs","ab","abs"])).to.be.true;
    })
    it("returns false to different type elements",()=>{
        expect(isSymmetric([1,2,"1"])).to.be.false;
    })
    it("returns false to nonsymmetric arrays",()=>{
        expect(isSymmetric([1,2])).to.be.false;
    })
})