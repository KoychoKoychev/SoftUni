const {createCalculator} = require('./7.addAndSubtract');
const {expect} = require('chai');


describe("Initial testing",()=>{
    let instance = null;

    beforeEach(()=>{
        instance = createCalculator();
    });

    describe("Unit tests",()=>{
        it("starts from zero",()=>{
            expect(instance.get()).to.equal(0);
        })
        it("has all its functions",()=>{
            expect(instance).to.have.ownProperty("add");
            expect(instance).to.have.ownProperty("subtract");
            expect(instance).to.have.ownProperty("get");
        })
        it("returns an object",()=>{
            expect(typeof instance).to.equal("object");
        })
        it("adds",()=>{
            instance.add(1);
            instance.add(2);
            expect(instance.get()).to.equal(3);
        })
        it("adds strings",()=>{
            instance.add("1");
            instance.add("2");
            instance.add("3");
            expect(instance.get()).to.equal(6);
        })
        it("parses at add",()=>{
            instance.add("str");
            expect(instance.get()).to.be.NaN;
        })
        it("parses at subtract",()=>{
            instance.subtract("str");
            expect(instance.get()).to.be.NaN;
        })
        it("subtracts",()=>{
            instance.subtract(1);
            instance.subtract(2);
            instance.subtract(3);
            expect(instance.get()).to.equal(-6);
        })
        it("subtracts strings",()=>{
            instance.subtract("1");
            instance.subtract("2");
            instance.subtract("3");
            expect(instance.get()).to.equal(-6);
        })
        it("subtracts chains",()=>{
            instance.subtract("1");
            instance.add("1");
            instance.subtract("2");
            instance.add("1");
            instance.subtract("3");
            instance.add("1");
            expect(instance.get()).to.equal(-3);
        })
        it("returns a number",()=>{
            instance.subtract("1");
            instance.add(1);
            instance.subtract(2);
            instance.add(1);
            instance.subtract("3");
            instance.add(1);
            expect(typeof instance.get()).to.equal("number");
        })
        it("chains mixed types",()=>{
            instance.subtract("1");
            instance.add(1);
            instance.subtract(2);
            instance.add(1);
            instance.subtract("3");
            instance.add(1);
            expect(instance.get()).to.equal(-3);
        })
    })
})