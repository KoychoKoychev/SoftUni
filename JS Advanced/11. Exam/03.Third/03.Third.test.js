const {library} = require("./library")
const {expect} = require("chai");

describe ("Third problem testing",()=>{
    it("Has all its methods",()=>{
        expect(library).to.has.ownProperty("calcPriceOfBook");
        expect(library).to.has.ownProperty("findBook");
        expect(library).to.has.ownProperty("arrangeTheBooks");
    })
    it("has a working price calc method",()=>{
        expect(library.calcPriceOfBook("ThisBook",1980)).to.equal("Price of ThisBook is 10.00");
        expect(library.calcPriceOfBook("ThisBook",1979)).to.equal("Price of ThisBook is 10.00");
        expect(library.calcPriceOfBook("ThisBook",1879)).to.equal("Price of ThisBook is 10.00");
        expect(library.calcPriceOfBook("ThisBook",1981)).to.equal("Price of ThisBook is 20.00");
        expect(library.calcPriceOfBook("ThisBook",2021)).to.equal("Price of ThisBook is 20.00");


        expect(()=>{library.calcPriceOfBook(["ThisBook"],1981)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook(1800,1981)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook(null,1981)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook(undefined,1981)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook({name:"Book"},1981)}).to.throw("Invalid input");

        expect(()=>{library.calcPriceOfBook("ThisBook","1981")}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook("ThisBook")}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook("ThisBook",undefined)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook("ThisBook",null)}).to.throw("Invalid input");
        expect(()=>{library.calcPriceOfBook("ThisBook",1981.1)}).to.throw("Invalid input");
    })
    it("has a working book find method",()=>{
        expect(()=>{library.findBook([],"Torronto")}).to.throw("No books currently available");
        expect(()=>{library.findBook([])}).to.throw("No books currently available");
        expect(library.findBook(["Troy", "Life Style", "Torronto"],"Torronto")).to.equal("We found the book you want.");
        expect(library.findBook(["Troy"],"Troy")).to.equal("We found the book you want.");
        expect(library.findBook(["Troy",1],"1")).to.equal("We found the book you want.");
        expect(library.findBook(["Troy"],"Tro")).to.equal("The book you are looking for is not here!");
        expect(library.findBook(["Troy", "Life Style", "Torronto"],"Torrororo")).to.equal("The book you are looking for is not here!");
    })
    it("arrange method validates the input",()=>{
        expect(()=>{library.arrangeTheBooks("1981")}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks([1981])}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks(1981.1)}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks(-1)}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks(0.1)}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks()}).to.throw("Invalid input");
        expect(()=>{library.arrangeTheBooks({number:1})}).to.throw("Invalid input");
    }) 
    it("has a working arrange method",()=>{
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        expect(library.arrangeTheBooks(141)).to.equal("Insufficient space, more shelves need to be purchased.");
    })  
})