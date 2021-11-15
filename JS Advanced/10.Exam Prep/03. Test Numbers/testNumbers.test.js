const { testNumbers } = require("./testNumbers");
const { expect } = require("chai");

describe("Testing numbers", () => {
    it("Has all its methods", () => {
        expect(testNumbers).to.has.ownProperty("sumNumbers");
        expect(testNumbers).to.has.ownProperty("numberChecker");
        expect(testNumbers).to.has.ownProperty("averageSumArray");
    })
    it("Has a working sum method", () => {
        expect(testNumbers.sumNumbers(1, 2)).to.equal("3.00")
        expect(testNumbers.sumNumbers(1.1, 2.2)).to.equal("3.30")
        expect(testNumbers.sumNumbers(1, 2.2)).to.equal("3.20")

        expect(testNumbers.sumNumbers(-1, 2.2)).to.equal("1.20")
        expect(testNumbers.sumNumbers(-1, -2.2)).to.equal("-3.20")
    })

    it("Has a working sum method with wrong input", () => {
        expect(testNumbers.sumNumbers("1", 2.2)).to.be.undefined
        expect(testNumbers.sumNumbers(1, "2.2")).to.be.undefined
    })
    it("Has a working numberChecker", () => {
        expect(testNumbers.numberChecker(1)).to.equal("The number is odd!")
        expect(testNumbers.numberChecker(2)).to.equal("The number is even!")
        expect(testNumbers.numberChecker("1")).to.equal("The number is odd!")
        expect(testNumbers.numberChecker("2")).to.equal("The number is even!")
        expect(() => testNumbers.numberChecker('asd')).to.throw();
    })
    it("has a working average", () => {
        expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        expect(testNumbers.averageSumArray([1.1, 2.1])).to.equal(1.6);
    })
})