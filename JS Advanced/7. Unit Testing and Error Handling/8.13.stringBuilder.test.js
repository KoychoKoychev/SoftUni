const { StringBuilder } = require("./8.13.stringBuilder");
const { expect } = require("chai");

describe("Problem 13. Unit Testing", () => {
    it("its constructor works", () => {
        expect(function test() {
            const a = new StringBuilder(123);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder(['123']);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder({ str: "123" });
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder('asd');
        }).to.not.throw();
        expect(function test() {
            const a = new StringBuilder();
        }).to.not.throw();
        let a = new StringBuilder();
        expect(a._stringArray).to.be.an("array").and.to.be.empty
        expect(a._stringArray).to.eql([])
    })
    it("has property append", () => {
        const a = new StringBuilder("asd");
        expect(a._stringArray).to.be.an("array")
        expect(a._stringArray).to.eql(['a', 's', 'd'])
        a.append("fg");
        expect(a._stringArray).to.eql(['a', 's', 'd', "f", "g"])
        expect(function test() {
            const a = new StringBuilder("123");
            a.append(123);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder('123');
            a.append(["fg"]);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder("123");
            a.append({ str: "fg" });
        }).to.throw();
    })
    it("has property pretend", () => {
        const a = new StringBuilder("asd");
        a.prepend("fg");
        expect(a._stringArray).to.eql(["f", "g", 'a', 's', 'd'])
        expect(function test() {
            const a = new StringBuilder("123");
            a.prepend(123);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder('123');
            a.prepend(["fg"]);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder("123");
            a.prepend({ str: "fg" });
        }).to.throw();
    })
    it("has property insertAt", () => {
        let a = new StringBuilder("asd");
        a.insertAt("fg", 0);
        expect(a._stringArray).to.eql(["f", "g", 'a', 's', 'd'])
        let c = new StringBuilder("asd");
        c.insertAt("fg", 3);
        expect(c._stringArray).to.eql(['a', 's', 'd', "f", "g"])
        let b = new StringBuilder("asd");
        b.insertAt("fg", 1);
        expect(b._stringArray).to.eql(['a', "f", "g", 's', 'd'])
        expect(function test() {
            const a = new StringBuilder("123");
            a.insertAt(123, 1);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder('123');
            a.insertAt(["fg"], 1);
        }).to.throw();
        expect(function test() {
            const a = new StringBuilder("123");
            a.insertAt({ str: "fg" }, 1);
        }).to.throw();
    })
    it("has a property remove", () => {
        let a = new StringBuilder("asd");
        a.remove(0, 1);
        expect(a._stringArray).to.eql(['s', 'd'])
        a.remove(1, 1);
        expect(a._stringArray).to.eql(['s'])
        let b = new StringBuilder("asdfg");
        b.remove(4, 1);
        expect(b._stringArray).to.eql(['a', 's', 'd', "f"])
        b.remove(0, 10);
        expect(b._stringArray).to.eql([]);

    })
    it("has a property toString", () => {
        let a = new StringBuilder("asd");
        expect(a.toString()).to.equal("asd")
        let b = new StringBuilder("asdsada");
        expect(b.toString()).to.equal("asdsada")
    })
    it("passes the zero Test", () => {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        expect(str.toString()).to.equal("User,woop hello, there")
        str.remove(6, 3);
        expect(str.toString()).to.equal("User,w hello, there")
    })
})