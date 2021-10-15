const {sum} = require(`./4.sumOfNumbers`);
const {expect} = require('chai');


describe("Sum Checker", ()=>{
    it("returns the right values",()=>{
        expect(sum([1,2,3])).to.equal = 6;
    })
    it("takes only array as argument",()=>{
        expect(sum('test')).to.throw;
    })
    it("returns a number",()=>{
        expect(typeof sum([1,2])).to.equal = "number";
    })
    it('parses the elements to numbers',()=>{
        expect(sum(["1","2"])).to.equal = 3;
    })
    it('returns zero at empty arr',()=>{
        expect(sum([])).to.equal = 0;
    })
    it('parses received only numbers',()=>{
        expect(sum(["1","asd"])).to.be.NaN;
    })
})