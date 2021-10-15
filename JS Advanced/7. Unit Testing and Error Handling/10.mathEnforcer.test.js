const { mathEnforcer } = require("./10.mathEnforcer");
const { expect } = require("chai");

describe("Test Math Enforcer", () => {
    let instance = null;
    beforeEach(() => {
        instance = mathEnforcer;
    })

    it("has all the methods", () => {
        expect(instance).to.have.ownProperty("addFive");
        expect(instance).to.have.ownProperty("subtractTen");
        expect(instance).to.have.ownProperty("sum");
    })
    it("addFive works fine", () => {
        expect(instance.addFive("a")).to.be.undefined;
        expect(instance.addFive("1")).to.be.undefined;
        expect(instance.addFive([1])).to.be.undefined;
        expect(instance.addFive({name:"Peter"})).to.be.undefined;
        expect(instance.addFive(0)).to.equal(5);
        expect(instance.addFive(1)).to.equal(6);
        expect(instance.addFive(-1)).to.equal(4);
        expect(instance.addFive(0.1)).to.be.closeTo(5.1,0.01);
    })
    it("subtractTen works fine", () => {
        expect(instance.subtractTen("a")).to.be.undefined;
        expect(instance.subtractTen("1")).to.be.undefined;
        expect(instance.subtractTen([1])).to.be.undefined;
        expect(instance.subtractTen({name:"Peter"})).to.be.undefined;
        expect(instance.subtractTen(0)).to.equal(-10);
        expect(instance.subtractTen(1)).to.equal(-9);
        expect(instance.subtractTen(-1)).to.equal(-11);
        expect(instance.subtractTen(10)).to.equal(0);
        expect(instance.subtractTen(0.1)).to.be.closeTo(-9.9,0.01);

    })
    it("sum works fine",() => {
        expect(instance.sum("1",1)).to.be.undefined;
        expect(instance.sum(1,"1")).to.be.undefined;
        expect(instance.sum([1],1)).to.be.undefined;
        expect(instance.sum(1,[1])).to.be.undefined;
        expect(instance.sum("1","1")).to.be.undefined;
        expect(instance.sum({num:1},1)).to.be.undefined;
        expect(instance.sum(1,{num:1})).to.be.undefined;
        expect(instance.sum(1,1)).to.equal(2);
        expect(instance.sum(1,0)).to.equal(1);
        expect(instance.sum(0,0)).to.equal(0);
        expect(instance.sum(-1,2)).to.equal(1);
        expect(instance.sum(2,-1)).to.equal(1);
        expect(instance.sum(2.1,-1.1)).to.closeTo(1,0.01);
        expect(instance.sum(2.1,1.1)).to.closeTo(3.2,0.01);
        expect(instance.sum(2.1,0.1)).to.closeTo(2.2,0.01);
    })
})