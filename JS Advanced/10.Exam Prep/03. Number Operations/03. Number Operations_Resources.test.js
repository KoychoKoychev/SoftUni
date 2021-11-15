const { numberOperations } = require("./03. Number Operations_Resources")
const { expect } = require("chai");

describe("Number operations check", () => {
    it("has all its methods present", () => {
        expect(numberOperations).to.has.ownProperty("powNumber");
        expect(numberOperations).to.has.ownProperty("numberChecker");
        expect(numberOperations).to.has.ownProperty("sumArrays");
    })
    it("has a working square method", () => {
        expect(numberOperations.powNumber(0)).to.equal(0);
        expect(numberOperations.powNumber(-1)).to.equal(1);
        expect(numberOperations.powNumber(2)).to.equal(4);
        expect(numberOperations.powNumber(-3)).to.equal(9);
    })
    it("has a working checker method", () => {
        expect(() => { numberOperations.numberChecker('asd') }).to.throw();
        expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
        expect(numberOperations.numberChecker("100")).to.equal("The number is greater or equal to 100!");
        expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker("99")).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker(-101)).to.equal("The number is lower than 100!");
    })
    it("has a working arraySummer method", () => {
        expect(numberOperations.sumArrays([1,2,3],[1,2])).to.eql([2,4,3]);
        expect(numberOperations.sumArrays(["1","2",3],[1,2])).to.eql(["11","22",3]);
        expect(numberOperations.sumArrays(["1","2",3],[])).to.eql(["1","2",3]);
        expect(numberOperations.sumArrays(["a"],["1","2",3])).to.eql(["a1","2",3]);
        expect(numberOperations.sumArrays(["a",'b',"c"],["1","2",3])).to.eql(["a1","b2","c3"]);
    })
})