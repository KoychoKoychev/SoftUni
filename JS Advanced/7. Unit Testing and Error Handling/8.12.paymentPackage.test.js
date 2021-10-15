const { PaymentPackage } = require("./8.12.paymentPackage");
const { expect } = require("chai");

describe("The class takes the right params", () => {
    it("Works with the right input", () => {
        const a = new PaymentPackage("Ivan", 100);
        expect(typeof (a)).to.equal("object");
        expect(a.name).to.equal("Ivan");
        expect(a.value).to.equal(100);
        expect(a.VAT).to.equal(20);
        expect(a.active).to.be.true;
    })
    it("Validates the name input", () => {
        function bad() {
            let badInput = new PaymentPackage("", 100)
        }
        expect(bad).to.throw();
        function bad2() {
            let badInput = new PaymentPackage(null, 100)
        }
        expect(bad2).to.throw();
        function bad3() {
            let badInput = new PaymentPackage(['asd'], 100)
        }
        expect(bad3).to.throw();
    })
    it("Validates the value input", () => {
        function bad() {
            let badInput = new PaymentPackage("asd", -100)
        }
        expect(bad).to.throw();
        function bad2() {
            let badInput = new PaymentPackage('asd', "100")
        }
        expect(bad2).to.throw();
        function bad3() {
            let badInput = new PaymentPackage('asd', [100])
        }
        expect(bad3).to.throw();
    })
    it("Validates the name setters",()=>{
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.name = 123;
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.name = ["123"];
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.name = "";
        }).to.throw();
    })
    it("Validates the value setters",()=>{
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.value = -1;
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.value = [123];
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.value = "123";
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.value = 0;
        }).to.not.throw();
    })
    it("Validates the VAT setters",()=>{
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.VAT = -1;
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.VAT = [123];
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.VAT = "123";
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.VAT = 0;
        }).to.not.throw();
    })
    it("Validates the active setters",()=>{
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.active = -1;
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.active = [123];
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.active = "123";
        }).to.throw();
        expect(function asd(){
            const a = new PaymentPackage("Ivan", 100);
            a.active = false;
        }).to.not.throw();
    })
    it("Has working getters",()=>{
        const a = new PaymentPackage("Ivan", 100);
        a.name="Peter";
        expect(a.name).to.equal("Peter");
        a.value=1;
        expect(a.value).to.equal(1);
        a.VAT=0;
        expect(a.VAT).to.equal(0);
        a.active=false;
        expect(a.active).to.be.false;
    })
    it("Has working toString method",()=>{
        const a = new PaymentPackage("Ivan", 100);
        expect(typeof(a.toString())).to.equal("string");
    })
    it("Returns the right result",()=>{
        const a = new PaymentPackage("Ivan", 100);
        expect(a.toString()).to.equal(`Package: Ivan\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`);
    })
    it("Returns a more complex result",()=>{
        const a = new PaymentPackage("Ivan", 100);
        a.active = false;
        a.VAT = 0;
        a.name = "Peter";
        a.value = 50
        expect(a.toString()).to.equal(`Package: Peter (inactive)\n- Value (excl. VAT): 50\n- Value (VAT 0%): 50`);
    })

})