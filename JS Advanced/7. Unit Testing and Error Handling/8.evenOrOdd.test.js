const {isOddOrEven} = require("./8.evenOrOdd");
const {expect} = require("chai");

describe ("Even or Odd Test",()=>{
    it("Works for odd",()=>{
        expect(isOddOrEven("a")).to.equal("odd")
        expect(isOddOrEven("a1233")).to.equal("odd")
        expect(isOddOrEven("aeq13qwe1")).to.equal("odd")

    })
    it("Works for even",()=>{
        expect(isOddOrEven("aa3311")).to.equal("even")
        expect(isOddOrEven("123444qweq")).to.equal("even")
        expect(isOddOrEven("1q2a4e5q")).to.equal("even")

    })
    it("Returns even for empty string",()=>{
        expect(isOddOrEven("")).to.equal("even")
    })
    it("Returns undefined for arrays",()=>{
        expect(isOddOrEven(["asd"])).to.be.undefined;
    })
    it("Returns undefined for numbers",()=>{
        expect(isOddOrEven(123)).to.be.undefined;
    })
    it("Returns undefined for objects",()=>{
        expect(isOddOrEven({name:"123"})).to.be.undefined;
    })
})