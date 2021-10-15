const {lookupChar} = require("./9.charLookup");
const {expect} = require("chai");

describe("Test Char Lookup",()=>{
    it("works fine",()=>{
        expect(lookupChar("qwerty",0)).to.equal("q");
        expect(lookupChar("qwerty",5)).to.equal("y");
        expect(lookupChar("qwerty",3)).to.equal("r");
    })
    it("checks if the input is the right type",()=>{
        expect(lookupChar([1,2,3],0)).to.be.undefined;
        expect(lookupChar({name:"Peter"},5)).to.be.undefined;
        expect(lookupChar(123,3)).to.be.undefined;
        expect(lookupChar("qwerty","1")).to.be.undefined;
        expect(lookupChar("qwerty",1.1)).to.be.undefined;
        expect(lookupChar("qwerty",[1])).to.be.undefined;
        expect(lookupChar("qwerty",{index:1})).to.be.undefined;
    })
    it("checks if the index is withing range",()=>{
        expect(lookupChar("qwerty",-1)).to.equal("Incorrect index");
        expect(lookupChar("qwerty",6)).to.equal("Incorrect index");
    })
})